import styled from "styled-components";
import { Screen } from "@styles/constants";

const Container = styled.div`
  max-width: var(--container-width);
  margin: auto;
  padding: 0 54px;

  @media ${Screen.mobile} {
    padding: 0 20px;
  },
`;

export default Container;
