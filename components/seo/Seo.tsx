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
          <link rel="canonical" href={seo?.canonical_url ?? canonicalURL} />
          <meta
            name="description"
            content={seo?.description ?? defaultDescription}
          />

          {seo?.keywords && <meta name="keywords" content={seo.keywords} />}

          {/* Open Graph */}
          <meta
            name="og:site_name"
            content={seo?.og_site_name ?? 'Ashton Guidebeck'}
          />
          {(seo?.og_title || seo?.title) && (
            <meta name="og:title" content={seo?.og_title ?? seo?.title} />
          )}
          <meta
            name="og:description"
            content={
              seo?.og_description ?? seo?.description ?? defaultDescription
            }
          />
          <meta name="og:image:height" content="268" />
          <meta name="og:image:width" content="512" />
          <meta name="og:url" content={seo?.canonical_url ?? canonicalURL} />

          {(seo?.itemprop_title ?? seo?.title) && (
            <meta
              name="itemprop:title"
              content={seo?.itemprop_title ?? seo?.title}
            />
          )}
          <meta
            name="itemprop:description"
            content={seo?.itemprop_desc ?? defaultDescription}
          />
          {seo?.no_index && <meta name="robots" content="noindex" />}
        </>
      )}
    </Head>
  );
};

export default Seo;
