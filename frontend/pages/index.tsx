import { useAccount } from "wagmi";
import { Button, Hero } from "../components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TiArrowRight, TiTimes } from "react-icons/ti";
import { useRouter } from "next/router";

export const moods = [
  "all moods",
  "happy 🥳",
  "sad 😢",
  "angry 😡",
  "confused 🤔",
];

export const cards = [
  {
    title: "Happy",
    description: "I'm happy because I'm learning Next.js",
    tags: ["happy"],
  },
  {
    title: "Sad",
    description: "I'm sad because I'm learning Next.js",
    tags: ["sad"],
  },
  {
    title: "Angry",
    description: "I'm angry because I'm learning Next.js",
    tags: ["angry"],
  },
];

export default function Landing() {
  const router = useRouter();
  const { isConnected } = useAccount();

  if (isConnected) {
    router.push("/home");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Hero />
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          const ready = mounted;
          const connected = ready && account && chain;
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}>
              {(() => {
                if (!connected) {
                  return (
                    <Button variant="secondary" onClick={openConnectModal}>
                      Connect wallet <TiArrowRight />
                    </Button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <Button variant="secondary" onClick={openConnectModal}>
                      Wrong network <TiTimes />
                    </Button>
                  );
                }
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
      {/* <TagList tags={moods} className="mx-auto" /> */}
      {/* <Card cards={cards} /> */}
    </div>
  );
}
