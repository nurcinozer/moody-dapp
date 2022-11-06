import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="dark:bg-blue-jeans dark:text-white bg-linen text-blue-jeans">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
