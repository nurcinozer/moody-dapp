import Head from "next/head";
import { NextSeo } from "next-seo";

const DEAFAULT_META_PROPS = {
  title: "moody dApp",
  description:
    "moody is a decentralized app that allows you to create and share your moods with your friends.",
  siteName: "Moody dApp",
  type: "website",
};

export type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  siteName?: string;
  locale?: string;
  url?: string;
};

export const Meta: React.FC<MetaProps> = ({
  title = DEAFAULT_META_PROPS.title,
  description = DEAFAULT_META_PROPS.description,
  siteName = DEAFAULT_META_PROPS.siteName,
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=0"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          site_name: siteName,
        }}
      />
    </>
  );
};
