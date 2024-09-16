import { NamespaceMetadata, ChainMetadata, ChainsMap } from "../helpers";

export const TonChainData: ChainsMap = {
  "0x3b6653db": {
    id: "ton:0x3b6653db",
    name: "Ton Mainnet",
    rpc: [],
    slip44: 195,
    testnet: false,
  }
};

export const TonMetadata: NamespaceMetadata = {
  // Tron Mainnet
  "0x3b6653db": {
    logo: "https://tronscan.io/static/media/TRON.4a760cebd163969b2ee874abf2415e9a.svg",
    rgb: "183, 62, 49",
  }
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(":")[1];
  const metadata = TonMetadata[reference];
  if (typeof metadata === "undefined") {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}
