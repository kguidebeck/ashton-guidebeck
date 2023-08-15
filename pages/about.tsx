import Layout from '@components/layout';
import Resume from '@components/resume';

// export interface AboutPageSchema {
//   data: ResumeSchema;
// }

const AboutPage = () => {
  return (
    <Layout seo={null}>
      <div>helo</div>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const [data] = await Promise.all([
//     await getSanityData<ResumeSchema>(AboutPageType, RESUME_PROJECTION),
//   ]);

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default AboutPage;
