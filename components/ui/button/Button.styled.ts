import { css } from 'styled-components';
import { Color, Ease, Font } from '@styles/constants';
import { rem } from '@styles/helpers';

export interface ButtonStylesProps {
  disabled?: boolean;
  isExternal?: boolean;
}

export const ButtonStyles = css<ButtonStylesProps>`
  display: block;
  font-family: ${Font.noto};
  text-transform: uppercase;
  padding: ${rem(18)} ${rem(50)};
  max-width: none;
  border-radius: ${rem(55)};
  line-height: 1.125;
  background: var(--button-background, ${Color.orangeDark});
  color: var(--button-color, ${Color.white});
  border: 3px solid var(--button-border, transparent);

  transition: background ${Ease.duration} ${Ease.out},
    color ${Ease.duration} ${Ease.out};
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: var(--button-hover, ${Color.orange});
    color: ${Color.white};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background: ${Color.orange};
        color: ${Color.white};
      }
    `};
`;
