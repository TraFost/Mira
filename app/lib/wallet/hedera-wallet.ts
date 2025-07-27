import {
  DAppConnector,
  HederaChainId,
  HederaJsonRpcMethod,
  HederaSessionEvent,
} from "@hashgraph/hedera-wallet-connect";
import { LedgerId } from "@hashgraph/sdk";

export const metadata = {
  name: "Mira",
  description:
    "Mira is an autonomous AI token watcher and trading agent on Hedera.",
  icons: ["https://avatars.githubusercontent.com/u/31002956"],
};

const initMetadata = (url: string) => ({
  ...metadata,
  url,
});

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "";

const dAppConnector = async (url: string) => {
  const connector = new DAppConnector(
    initMetadata(url),
    LedgerId.MAINNET,
    projectId,
    Object.values(HederaJsonRpcMethod),
    [HederaSessionEvent.ChainChanged, HederaSessionEvent.AccountsChanged],
    [HederaChainId.Mainnet, HederaChainId.Testnet],
  );

  await connector.init();

  return connector;
};

let instance: DAppConnector | undefined;
let currentOrigin = "";

export const getDAppConnector = async (url: string) => {
  if (!instance) {
    instance = await dAppConnector(url);
    currentOrigin = url;
  } else if (url !== currentOrigin) {
    console.warn(
      "getDAppConnector called with different URL; reusing existing instance",
    );
  }
  return instance;
};
