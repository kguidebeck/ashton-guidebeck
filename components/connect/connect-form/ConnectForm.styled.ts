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
  margin-left: auto;
`;

export const Message = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  font-family: ${Font.noto};
  font-size: ${rem(12)};
  background-color: ${Color.sageDark};
  color: ${Color.cream};
  margin-top: ${rem(15)};
  padding: ${rem(8)} ${rem(15)};
  text-align: center;
  border-radius: ${rem(30)};
  transform: scaleY(0);
  transition: transform 300ms ${Ease.out};

  ${({ active }) =>
    active &&
    `
    transform: scaleY(100%);
  `}
`;
