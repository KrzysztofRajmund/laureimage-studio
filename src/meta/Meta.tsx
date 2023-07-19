import Head from "next/head";
import { FC } from "react";
import { MetaType } from "../utils/types";

export const Meta: FC<MetaType> = ({
  keywords,
  type,
  webUrl,
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta property="og:url" content={webUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Fotograf Ślubny Szczecin",
  keywords:
    "Laureimage, fotograf ślubny, fotograf szczecin, fotografia ślubna, wesele, plener ślubny",
  description: "Naturalna Fotografia Ślubna, Fotograf Szczecin",
  ogTitle: "Laureimage Fotograf Ślubny",
};
