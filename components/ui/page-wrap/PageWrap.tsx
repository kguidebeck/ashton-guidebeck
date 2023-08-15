import * as Styled from './PageWrap.styled';

const PageWrap = ({ children }: { children: React.ReactNode }) => {
  return <Styled.Wrap>{children}</Styled.Wrap>;
};

export default PageWrap;
