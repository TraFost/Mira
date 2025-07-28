import { useCallback, useEffect, useState } from "react";

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
    try {
      setStatus("connecting");
      const connector = await getDAppConnector(originUrl);
      const session = await connector.openModal();
      if (!session) return;

      const acct = connector.signers.at(-1)?.getAccountId().toString() ?? null;
      setAccountId(acct);
      setStatus("connected");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  }, [originUrl]);

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
