import styled from 'styled-components';
import StyledButton from '@components/ui/button';
import { rem } from '@styles/helpers';

export const Form = styled.div`
  margin-top: ${rem(45)};

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px 10px;
  }
`;

export const Button = styled(StyledButton)`
  margin-left: auto;
`;

export const Error = styled.span``;
