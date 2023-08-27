import styled from 'styled-components';
import { rem } from '@styles/helpers';
import { Color, Ease, Font } from '@styles/constants';
import { ButtonStyles } from '@components/ui/button/Button.styled';

export const Form = styled.div`
  margin-top: ${rem(45)};

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px 10px;
  }
`;

export const Submit = styled.button`
  ${ButtonStyles}
  min-width: ${rem(192)};
  margin-left: auto;
`;

export const Message = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  padding: ${rem(8)} ${rem(15)};
  border-radius: ${rem(30)};
  margin-top: ${rem(15)};
  background-color: ${Color.sageDark};
  color: ${Color.cream};
  font-family: ${Font.noto};
  font-size: ${rem(12)};
  text-align: center;
  transform: scaleY(0);
  transition: transform 300ms ${Ease.out};

  ${({ active }) =>
    active &&
    `
    transform: scaleY(100%);
  `}
`;
