import { Meta } from "..";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <section className={`flex flex-col h-screen`}>
        <div className="container mx-auto flex-grow font-sans">{children}</div>
      </section>
    </>
  );
};
