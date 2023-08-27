import * as Styled from './ErrorContent.styled';

const ErrorContent = () => {
  const heading = 'Something went wrong';
  const message = 'The page you were looking for could not be found.';
  const button_text = 'Return Home';

  return (
    <Styled.ContentWrapper>
      <Styled.Content>
        <h1>{heading}</h1>
        <Styled.ErrorMessage>{message}</Styled.ErrorMessage>
        <Styled.ReturnCta href="/">{button_text}</Styled.ReturnCta>
      </Styled.Content>
    </Styled.ContentWrapper>
  );
};

export default ErrorContent;
