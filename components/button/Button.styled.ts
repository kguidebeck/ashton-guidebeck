import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Color, Ease } from '@styles/constants';

export interface ButtonStylesProps {
  disabled?: boolean;
  isExternal?: boolean;
}

export const ButtonStyles = css<ButtonStylesProps>`
  display: block;
  padding: 15px 30px;
  max-width: none;
  border-radius: 50px;

  transition: background ${Ease.duration} ${Ease.out},
    color ${Ease.duration} ${Ease.out};
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  & + & {
    margin-top: 20px;
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
