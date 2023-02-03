// import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const EmbedChainInfos: ChainInfo[] = [
  {
    chainId: "sixnet",
    chainName: "SIX PROTOCOL",
    rpc: "https://sixnet-rpc.sixprotocol.net",
    rest: "https://sixnet-api.sixprotocol.net",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "6x",
      bech32PrefixAccPub: "6x" + "pub",
      bech32PrefixValAddr: "6x" + "valoper",
      bech32PrefixValPub: "6x" + "valoperpub",
      bech32PrefixConsAddr: "6x" + "valcons",
      bech32PrefixConsPub: "6x" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinGeckoId: "six-network",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SIX",
        coinMinimalDenom: "usix",
        coinDecimals: 6,
        coinGeckoId: "six-network",
        gasPriceStep: {
          low: 1.25,
          average: 1.45,
          high: 1.65,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "SIX",
      coinMinimalDenom: "usix",
      coinDecimals: 6,
      coinGeckoId: "six-network",
    },
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "cosmwasm"],
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = [
  "https://wallet.keplr.app",
  "https://validator.keplr.app",
];

export const CommunityChainInfoRepo = {
  organizationName: "chainapsis",
  repoName: "keplr-chain-registry",
  branchName: "main",
};
