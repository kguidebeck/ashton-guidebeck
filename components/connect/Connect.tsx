import Image from 'next/image';
import { ConnectSchema } from '@models/page.model';
import Container from '@components/container';
import RichText from '@components/ui/rich-text';
import ConnectForm from './connect-form';
import * as Styled from './Connect.styled';
import useMediaQuery from '@hooks/useMediaQuery';
import { Screen } from '@styles/constants';

const Connect = ({ data }: { data: ConnectSchema }) => {
  const { heading, copy, background_desktop, background_mobile } = data;
  const isMobile = useMediaQuery(`only screen and ${Screen.mobile}`);

  return (
    <Styled.Connect>
      {background_desktop?.asset?.url && (
        <Styled.Background>
          {!isMobile && (
            <Image
              className="image--desktop"
              src={background_desktop.asset.url}
              width={1052}
              height={862}
              priority
              loading="eager"
              alt={background_desktop.alt || ''}
            />
          )}
          {isMobile && background_mobile.asset.url && (
            <Image
              className="image--mobile"
              src={background_mobile.asset.url}
              width={1200}
              height={1644}
              priority
              loading="eager"
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={background_desktop.alt || ''}
            />
          )}
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
