import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import "../lib/i18n"; 
import { Layout } from '../layout/Layout';
import Root from './root';
import '../styles/globals.scss';
//FONTAWESOME FOR NEXTJS:
//To prevent oversized icons, as they do not use rem: https://fontawesome.com/docs/web/use-with/react/use-with
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return <Root>{getLayout(<Component {...pageProps} />)}</Root>;
}

export default appWithTranslation(MyApp);
