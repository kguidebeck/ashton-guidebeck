import styled, { css } from 'styled-components';
import { Font, Color } from '@styles/constants';
import { rem } from '@styles/helpers';

export const InputCSS = css`
  --radius: 50px;
  font-family: ${Font.noto};
  font-size: ${rem(14)};
  text-transform: uppercase;
  border: 1px solid ${Color.rust};
  line-height: 1.33;
  width: 100%;
`;

export const Input = styled.input`
  ${InputCSS}
  border-radius: var(--radius);
  padding: 20px 30px;
`;

export const TextArea = styled.textarea`
  ${InputCSS}
  resize: none;
  border-radius: var(--radius) var(--radius) var(--radius) 0;
  padding: 30px;
`;
