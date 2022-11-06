import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components";
import { LivepeerConfig } from "@livepeer/react";
import { LivePeerClient } from "../clients";

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "moody",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <LivepeerConfig client={LivePeerClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LivepeerConfig>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
