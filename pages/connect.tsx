import {
  getSanityData,
  contactPageType,
  ContactSchema,
  CONTACT_PROJECTION,
} from '@models/page.model';
import Layout from '@components/layout';
import Connect from '@components/connect';

export interface ConnectPageSchema {
  data: ContactSchema;
}

const ConnectPage = ({ data }: ConnectPageSchema) => {
  return (
    <Layout seo={data.seo}>
      <Connect data={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const [data] = await Promise.all([
    await getSanityData<ContactSchema>(contactPageType, CONTACT_PROJECTION),
  ]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default ConnectPage;
