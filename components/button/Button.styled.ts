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
  padding: 18px 50px;
  max-width: none;
  border-radius: 55px;
  line-height: 1.125;
  background: ${Color.orangeDark};
  color: ${Color.white};
  border: 0;

  transition: background ${Ease.duration} ${Ease.out},
    color ${Ease.duration} ${Ease.out};
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${Color.orange};
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
