import { useRouter } from "next/router";
import Head from "next/head";
import { SITE_URL } from "@utils/constants";
import { Globals } from "@models/globals.model";
import { Sanity } from "@models/sanity.model";
import Header from "@components/header";
import Footer from "@components/footer";

interface LayoutProps {
  globals?: Globals;
  children: React.ReactNode;
  seo: Sanity.Seo | null;
  pageID?: string;
  title?: string;
}

const Layout = ({ globals, children, pageID, seo, title }: LayoutProps) => {
  const router = useRouter();
  // const { navigation, footer } = globals;
  const canonicalURL = `${SITE_URL}${router.asPath}`;
  const defaultDescription = "Temporary default description for ashton.";

  return (
    <>
      <Head>
        <title>{seo?.title ?? title}</title>
        {seo !== null && (
          <>
            <meta
              name="description"
              content={seo.description ?? defaultDescription}
            />
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
            <link rel="canonical" href={seo.canonical_url ?? canonicalURL} />

            {/* Open Graph */}
            <meta
              property="og:site_name"
              content={seo.og_site_name ?? "Ashton Guidebeck"}
            />
            <meta property="og:title" content={seo.og_title ?? seo.title} />
            <meta
              property="og:description"
              content={
                seo.og_description ?? seo.description ?? defaultDescription
              }
            />
            <meta property="og:image:height" content="268" />
            <meta property="og:image:width" content="512" />
            <meta
              property="og:url"
              content={seo.canonical_url ?? canonicalURL}
            />
            <meta
              property="og:image"
              content={
                seo.og_image?.url ?? `https://www.mirror.co/og-image.jpg`
              }
            />
            <meta property="og:type" content="website" />

            <meta
              name="p:domain_verify"
              content="858c57a6ac5e0f6bfc3d7afe95a2d4af"
            />
            <meta
              property="itemprop:title"
              content={seo.itemprop_title ?? seo.title}
            />
            <meta
              property="itemprop:description"
              content={seo.itemprop_desc ?? defaultDescription}
            />
            {seo.no_index && <meta name="robots" content="noindex" />}

            <link rel="icon" type="image/png" href="/favicon-16x16.png?v=2" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png?v=2" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#000000"
            />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="/site.webmanifest" />
          </>
        )}
      </Head>

      <Header navigation={globals?.navigation} />

      <main id={pageID}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
