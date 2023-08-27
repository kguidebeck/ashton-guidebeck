import Link from 'next/link';
import styled from 'styled-components';
import { Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import { ButtonStyles } from '@components/ui/button/Button.styled';
import Container from '@components/container';

export const ContentWrapper = styled.div`
  min-height: calc(100vh - ${rem(76)});
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Container)`
  @media ${Screen.lapotpSmUp} {
    max-width: 680px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 30px 0 50px;
`;

export const ReturnCta = styled(Link)`
  ${ButtonStyles}
  display: inline-block;

  @media ${Screen.mobile} {
    display: block;
  }
`;
