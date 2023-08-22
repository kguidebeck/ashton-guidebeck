import styled from 'styled-components';
import Link from 'next/link';
import { Screen } from '@styles/constants';
import { ButtonStyles } from '@components/ui/button/Button.styled';

export const Resume = styled.div`
  --container-width: 1080px;
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const Header = styled.div`
  padding-bottom: 75px;
`;

export const HeaderWrapper = styled.div`
  @media ${Screen.mobileUp} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const DownloadButton = styled(Link)`
  ${ButtonStyles}

  @media ${Screen.mobile} {
    width: 100%;
    margin-top: 20px;
  }
`;
