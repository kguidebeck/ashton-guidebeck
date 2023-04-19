import styled from 'styled-components';
import { Screen } from '@styles/constants';
import { rem } from '@styles/helpers';

const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  padding: 0 ${rem(54)};

  @media ${Screen.mobile} {
    padding: 0 ${rem(20)};
  }
`;

export default Container;
