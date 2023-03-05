import {
  getSanityData,
  resumePageType,
  ResumeSchema,
  RESUME_PROJECTION,
} from '@models/page.model';
import Layout from '@components/layout';
import Resume from '@components/resume';

export interface ResumePageSchema {
  data: ResumeSchema;
}

const ResumePage = ({ data }: ResumePageSchema) => {
  return (
    <Layout seo={data.seo}>
      <Resume data={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const [data] = await Promise.all([
    await getSanityData<ResumeSchema>(resumePageType, RESUME_PROJECTION),
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

export default ResumePage;
