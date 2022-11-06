import Link from "next/link";
import Image from "next/image";

export const logo = "/logo.svg";

export const Footer = () => {
  return (
    <div className="sticky top-[100vh] container py-8 mx-auto flex items-center sm:flex-row flex-col font-sans">
      <Link href="/" className="flex md:justify-start justify-center">
        <Image src={logo} alt="Logo" width={150} height={35} />
      </Link>
      <p className="text-sm dark:text-pigeon-post text-can-can sm:ml-4 sm:pl-4 sm:border-l-2 dark:sm:border-pigeon-post sm:border-can-can sm:py-2 sm:mt-0 mt-4">
        © 2022 moody —
        <Link
          href="https://twitter.com/nurcinozer"
          className="ml-1"
          target="_blank">
          @nurcinozer
        </Link>
      </p>
    </div>
  );
};
