import type { AppProps } from 'next/app';
import Helmet from 'react-helmet';
import { useRouter } from 'next/router';
import { GlobalStyle } from '@styles/global';
import Footer from '@components/footer';
import Header from '@components/header';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="Ashton Guidebeck"
        meta={[
          { charset: 'UTF-8' },
          { name: 'msapplication-TileColor', content: '#000000' },
          { name: 'theme-color', content: '#000000' },
        ]}
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
          },
          {
            rel: 'manifest',
            href: '/favicons/site.webmanifest',
            defer: true,
          },
          {
            rel: 'mask-icon',
            href: '/favicons/safari-pinned-tab.svg',
            color: '#000000',
          },
          { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
        ]}
      />
      <Header />
      <Component key={asPath} {...pageProps} />
      <Footer />
    </>
  );
}
