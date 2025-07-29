import { useCallback, useEffect, useState } from "react";

import { baseFetch } from "~/lib/utils/fetch";
import { getDAppConnector } from "~/lib/wallet/hedera-wallet";

type WalletStatus = "idle" | "connecting" | "connected" | "error";

/* 
were not supposed to destruct class object, we should initiate/create a new instance out of it.
cause destructuring an object will lose the context of `this` 
*/
export function useWallet() {
  const [accountId, setAccountId] = useState<string | null>(null);
  const [status, setStatus] = useState<WalletStatus>("idle");

  const originUrl = typeof window !== "undefined" ? window.location.origin : "";

  const connect = useCallback(async () => {
    let timeout: NodeJS.Timeout | undefined;

    try {
      setStatus("connecting");

      const connector = await getDAppConnector(originUrl);

      timeout = setTimeout(() => {
        console.warn("Wallet modal still open, resetting to idle");
        setStatus("idle");
      }, 15_000);

      const session = await connector.openModal();
      if (!session) {
        console.warn("User closed modal manually");
        setStatus("idle");
        return;
      }

      const acct = connector.signers.at(-1)?.getAccountId().toString() ?? null;

      setAccountId(acct);
      setStatus("connected");

      await baseFetch("/api/wallet/save", {
        method: "POST",
        body: { accountId: acct },
      });
    } catch (e) {
      console.error("Wallet error:", e);

      clearTimeout(timeout);
      setStatus("error");
    }
  }, [originUrl]);

  console.log(accountId, "ok");

  const disconnect = useCallback(async () => {
    const connector = await getDAppConnector(originUrl);
    await connector.disconnectAll();
    setAccountId(null);
    setStatus("idle");
  }, [originUrl]);

  useEffect(() => {
    return () => {
      getDAppConnector(originUrl)
        .then((c) => c.disconnectAll())
        .catch(() => {});
    };
  }, [originUrl]);

  return { accountId, status, connect, disconnect };
}
