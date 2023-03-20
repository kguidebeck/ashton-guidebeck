import styled from 'styled-components';
import { InputWidth } from './ConnectForm.model';
import { VisuallyHidden } from '@styles/helpers';

export const Form = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 10px;
  }
`;

export const Field = styled.div<{ width?: InputWidth }>`
  position: relative;
  grid-column: ${({ width }) =>
    width == InputWidth.HALF ? 'span 1' : '1 / -1'};
`;

export const Label = styled.label`
  ${VisuallyHidden}
`;

export const Error = styled.span``;
