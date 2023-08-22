import React from 'react';
import { Sanity } from '@models/sanity.model';
import Seo from '@components/seo';
import PageWrap from '@components/ui/page-wrap';

interface LayoutProps {
  seo: Sanity.Seo | null;
  pageID?: string;
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ seo, pageID, title, children }: LayoutProps) => {
  return (
    <>
      <Seo seo={seo} title={title} />
      <main id={pageID}>
        <PageWrap pageID={pageID}>{children}</PageWrap>
      </main>
    </>
  );
};

export default Layout;
