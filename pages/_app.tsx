import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GlobalStyle } from '@styles/global';
import Footer from '@components/footer';
import Header from '@components/header';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <title key="title">Ashton Guidebeck</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="msapplication-TileColor" content="#6C674B" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/favicon-32x32.png"
        />
        <meta name="theme-color" content="#6C674B" />
      </Head>
      <Header />
      <Component key={asPath} {...pageProps} />
      <Footer />
    </>
  );
}
