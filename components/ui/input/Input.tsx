import React from 'react';
import TextInputBorder from '@assets/svgs/TextInputBorder';
import * as Styled from './Input.styled';
import TextAreaBorder from '@assets/svgs/TextAreaBorder';
import { VisuallyHidden } from '@styles/helpers';

interface InputProps {
  type?: 'text' | 'textarea';
  id: string;
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  children: React.ReactNode;
}

const Input = ({
  type = 'text',
  id,
  label,
  error,
  touched,
  children,
}: InputProps) => {
  return (
    <Styled.Input>
      <VisuallyHidden as="label" htmlFor={id}>
        {label}
      </VisuallyHidden>
      <Styled.InputWrap>
        {type === 'textarea' ? <TextAreaBorder /> : <TextInputBorder />}

        {children}
      </Styled.InputWrap>

      {error && touched && <Styled.Error>{error}</Styled.Error>}
    </Styled.Input>
  );
};

export default Input;
