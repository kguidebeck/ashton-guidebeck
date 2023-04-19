import { NextPage, GetStaticPropsContext } from 'next';
import {
  getSanityData,
  homePageType,
  HomeSchema,
  HOME_PROJECTION,
} from '@models/page.model';
import Layout from '@components/layout';
import Hero from '@components/home/hero';

export interface HomePageSchema {
  data: HomeSchema;
}

const HomePage = ({ data }: HomePageSchema) => {
  return (
    <Layout seo={data.seo}>
      <Hero data={data.hero} />
    </Layout>
  );
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const [data] = await Promise.all([
    await getSanityData<HomeSchema>(homePageType, HOME_PROJECTION),
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

export default HomePage;
