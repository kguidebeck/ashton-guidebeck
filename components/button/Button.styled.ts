import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Color, Ease, Font } from '@styles/constants';

export interface ButtonStylesProps {
  disabled?: boolean;
  isExternal?: boolean;
}

export const ButtonStyles = css<ButtonStylesProps>`
  display: block;
  font-family: ${Font.noto};
  text-transform: uppercase;
  padding: 15px 30px;
  max-width: none;
  border-radius: 50px;
  background: ${Color.rust};
  color: ${Color.white};
  border: 0;

  transition: background ${Ease.duration} ${Ease.out},
    color ${Ease.duration} ${Ease.out};
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${Color.taupe};
    color: ${Color.white};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background: ${Color.rust};
        color: ${Color.white};

        &:hover {
          background: ${Color.taupe};
          color: ${Color.white};
        }
      }
    `};
`;
