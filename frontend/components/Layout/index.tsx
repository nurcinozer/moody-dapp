import { Footer, Meta, Navbar } from "..";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <section className={`flex flex-col h-screen`}>
        <Navbar />
        <div className="container p-5 mx-auto flex-grow font-sans">
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
};
