import React from 'react';
import * as Styled from './PageWrap.styled';

const PageWrap = ({
  pageID,
  children,
}: {
  pageID?: string;
  children: React.ReactNode;
}) => {
  return <Styled.Wrap pageID={pageID}>{children}</Styled.Wrap>;
};

export default PageWrap;
