import { NextPage } from 'next';
// import { getGlobals } from '@models/globals.model';
import { Sanity } from '@models/sanity.model';
import Layout from '@components/layout';
import ErrorContent from '@components/error-content';

const ErrorPage: NextPage<Sanity.PageProps> = () => {
  const page_title = 'Page Not Found';

  return (
    <Layout pageID="error" title={page_title} seo={null}>
      <ErrorContent />
    </Layout>
  );
};

export default ErrorPage;
