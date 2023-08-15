import Container from '@components/container/Container';
import { ConnectSchema } from '@models/page.model';
import ConnectForm from './connect-form';
import * as Styled from './Connect.styled';
import Image from 'next/image';
import RichText from '@components/ui/rich-text';

const Connect = ({ data }: { data: ConnectSchema }) => {
  const { heading, copy, background_desktop, background_mobile, show_socials } =
    data;

  return (
    <Styled.Connect>
      {background_desktop?.asset?.url && (
        <Styled.Background>
          <Image
            src={background_desktop.asset.url}
            width={2048}
            height={1644}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={background_desktop.alt || ''}
          />
        </Styled.Background>
      )}
      <Container>
        <Styled.Content>
          {heading && <h1>{heading}</h1>}
          {copy && (
            <Styled.Copy>
              <RichText value={copy} />
            </Styled.Copy>
          )}
          <ConnectForm />
        </Styled.Content>
      </Container>
    </Styled.Connect>
  );
};

export default Connect;
