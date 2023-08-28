import Head from 'next/head';
import { useRouter } from 'next/router';
import { Sanity } from '@models/sanity.model';
import { SITE_URL } from '@utils/constants';

const Seo = ({ seo, title }: { seo: Sanity.Seo | null; title?: string }) => {
  const router = useRouter();
  const pageTitle = seo?.title ?? title;
  const defaultDescription =
    'Systemically Trained Therapist | Transitioning out of Clinical Roles';
  const canonicalURL = `${SITE_URL}${router.asPath}`;

  return (
    <Head>
      <title key="title">{`${
        pageTitle ? `${pageTitle} | ` : ''
      }Ashton Guidebeck`}</title>
      {seo && (
        <>
          <link rel="canonical" href={canonicalURL} />
          <meta
            name="description"
            content={seo?.description ?? defaultDescription}
          />

          {seo?.keywords && <meta name="keywords" content={seo.keywords} />}

          {/* Open Graph */}
          <meta name="og:site_name" content="Ashton Guidebeck" />
          {seo?.title && <meta name="og:title" content={seo.title} />}
          <meta
            name="og:description"
            content={seo?.description ?? defaultDescription}
          />
          <meta
            property="og:image"
            content={seo?.image?.asset?.url || `/seo-home.jpg`}
          />
          <meta name="og:image:height" content="403" />
          <meta name="og:image:width" content="512" />
          <meta name="og:url" content={canonicalURL} />

          {/* Twitter */}
          <meta name="twitter:creator" content={pageTitle} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={pageTitle} />
          <meta
            name="twitter:description"
            content={seo?.description || defaultDescription}
          />
          <meta
            property="twitter:image:src"
            content={seo?.image?.asset?.url || `/seo-home.jpg`}
          />
          <meta name="twitter:url" content={canonicalURL} />

          {seo?.no_index && <meta name="robots" content="noindex" />}
        </>
      )}
    </Head>
  );
};

export default Seo;
