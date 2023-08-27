import styled from 'styled-components';
import Link from 'next/link';
import { Screen } from '@styles/constants';
import { ButtonStyles } from '@components/ui/button/Button.styled';
import { rem } from '@styles/helpers';

export const Resume = styled.div`
  --container-width: 1080px;
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const Header = styled.div`
  padding-bottom: ${rem(75)};

  @media ${Screen.mobile} {
    padding-bottom: ${rem(50)};
    text-align: center;
  }
`;

export const HeaderWrapper = styled.div`
  @media ${Screen.mobileUp} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const DownloadButton = styled(Link)`
  ${ButtonStyles}

  @media ${Screen.mobile} {
    width: 100%;
    margin-top: 20px;
  }
`;
