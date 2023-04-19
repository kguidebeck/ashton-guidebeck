import styled from 'styled-components';
import { Screen } from '@styles/constants';
import Button from '@components/button';
import { rem } from '@styles/helpers';

export const Resume = styled.div`
  --container-width: 1080px;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: ${rem(200)} 0 ${rem(100)};
`;

export const Header = styled.div`
  padding-bottom: 75px;
`;

export const HeaderWrapper = styled.div`
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
