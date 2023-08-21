import Helmet from 'react-helmet';
import { useRouter } from 'next/router';
import { Sanity } from '@models/sanity.model';
import { SITE_URL } from '@utils/constants';

const Seo = ({ seo, title }: { seo: Sanity.Seo | null; title?: string }) => {
  const router = useRouter();
  const pageTitle = seo?.title ?? title;
  const defaultDescription =
    'Systemically Trained Therapist | Transitioning out of Clinical Roles';
  const canonicalURL = `${SITE_URL}${router.asPath}`;

  const meta = [
    {
      name: 'description',
      content: seo?.description ?? defaultDescription,
    },
  ];

  return (
    <Helmet
      title={`${pageTitle ? `${pageTitle} | ` : ''}Ashton Guidebeck`}
      {...(seo && {
        link: [
          {
            rel: 'canonical',
            href: seo?.canonical_url ?? canonicalURL,
          },
        ].filter(Boolean),
        meta: [
          {
            name: 'description',
            content: seo?.description ?? defaultDescription,
          },
          {
            ...(seo?.keywords && {
              name: 'keywords',
              content: seo.keywords,
            }),
          },
          /* Open Graph */
          {
            name: 'og:site_name',
            content: seo?.og_site_name ?? 'Ashton Guidebeck',
          },
          {
            ...((seo?.og_title || seo?.title) && {
              name: 'og:title',
              content: seo?.og_title ?? seo?.title,
            }),
          },
          {
            name: 'og:description',
            content:
              seo?.og_description ?? seo?.description ?? defaultDescription,
          },
          {
            name: 'og:image:height',
            content: '268',
          },
          {
            name: 'og:image:width',
            content: '512',
          },
          {
            property: 'og:url',
            content: seo?.canonical_url ?? canonicalURL,
          },
          // {
          //   property: "og:image",
          //   content: seo.og_image?.url ?? `https://www.mirror.co/og-image.jpg`
          // },
          {
            property: 'og:type',
            content: 'website',
          },
          // {
          //   property: 'p:domain_verify',
          //   content: "858c57a6ac5e0f6bfc3d7afe95a2d4af",
          // },
          {
            ...((seo?.itemprop_title ?? seo?.title) && {
              name: 'itemprop:title',
              content: seo?.itemprop_title ?? seo?.title,
            }),
          },
          {
            property: 'itemprop:description',
            content: seo?.itemprop_desc ?? defaultDescription,
          },
          {
            ...(seo?.no_index && {
              name: 'robots',
              content: 'noindex',
            }),
          },
          {
            property: 'msapplication-TileColor',
            content: '#000000',
          },
          {
            property: 'theme-color',
            content: '#8E542F',
          },
        ].filter(Boolean),
      })}
    />
  );
};

export default Seo;
