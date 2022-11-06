import Link from "next/link";
import Image from "next/image";
import { Button, Toggle } from "..";
import { TiPlus, TiArrowRight, TiTimes } from "react-icons/ti";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const logo = "/logo.svg";

export const Navbar = () => {
  const router = useRouter();

  const { isConnected } = useAccount();

  return (
    <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center font-sans">
      <Link href="/" className="mb-4 md:mb-0">
        <Image src={logo} alt="Logo" width={150} height={35} />
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {isConnected && (
          <Link className="mr-5 hover:text-can-can" href="/">
            My moods
          </Link>
        )}
        {/* <Link className="mr-5 hover:text-can-can" href="/">
          Coffeess
        </Link> */}
      </nav>
      <div className="flex space-x-5">
        {isConnected && (
          <Button variant="primary" onClick={() => router.push("/add")}>
            <TiPlus /> Add mood
          </Button>
        )}
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
                  return (
                    <Button variant="secondary" onClick={openConnectModal}>
                      {account.displayName}
                    </Button>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        <Toggle />
      </div>
    </div>
  );
};
