import styled from 'styled-components';
import { Screen } from '@styles/constants';
import Container from '@components/container';
import Button from '@components/button';

export const Resume = styled.div`
  --container-width: 1180px;
`;

export const Header = styled.div`
  padding-bottom: 75px;
`;

export const HeaderWrapper = styled(Container)`
  @media ${Screen.mobileUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DownloadButton = styled(Button)`
  @media ${Screen.mobile} {
    width: 100%;
    margin-top: 20px;
  }
`;
