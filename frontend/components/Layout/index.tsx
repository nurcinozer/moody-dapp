import { Footer, Meta, Navbar } from "..";

import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  weight: "500",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <section className={`${quicksand.className} flex flex-col h-screen`}>
        <Navbar />
        <div className="container p-5 mx-auto flex-grow">{children}</div>
        <Footer />
      </section>
    </>
  );
};
