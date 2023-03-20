import Container from '@components/container/Container';
import { ContactSchema } from '@models/page.model';
import PortableTextWrapper from '@components/primitives/portable-text';
import ConnectForm from './connect-form';
import * as Styled from './Connect.styled';

const Connect = ({ data }: { data: ContactSchema }) => {
  const { heading, copy, show_socials } = data;

  console.log(data);

  return (
    <div>
      <Container>
        <Styled.Grid>
          <Styled.Content>
            {heading && <h1>{heading}</h1>}
            {copy && <PortableTextWrapper data={copy} />}
          </Styled.Content>
          <ConnectForm />
        </Styled.Grid>
      </Container>
    </div>
  );
};

export default Connect;
