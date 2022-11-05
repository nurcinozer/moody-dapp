import Link from "next/link";
import Image from "next/image";
import { Button, Toggle } from "..";
import { TiArrowRight, TiPlus } from "react-icons/ti";

const logo = "/logo.svg";

export const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
      <Link href="/" className="mb-4 md:mb-0">
        <Image src={logo} alt="Logo" width={150} height={35} />
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-can-can" href="/">
          My moods
        </Link>
        {/* <Link className="mr-5 hover:text-can-can" href="/">
          Coffeess
        </Link> */}
      </nav>
      <div className="space-x-5">
        <Button variant="primary">
          <TiPlus /> Add mood
        </Button>
        {/* <Button variant="secondary">
          Connect wallet <TiArrowRight />
        </Button> */}
        <Toggle />
      </div>
    </div>
  );
};
