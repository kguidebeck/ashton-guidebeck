import Link from "next/link";
import styled from "styled-components";
import { Font, Color, Weight, Screen } from "@styles/constants";
import Logo from "@svgs/logo";

export const Header = styled.header`
  --logo-width: 175px;
  --logo-height: 83px;
  padding: 40px 0;

  @media ${Screen.mobile} {
    padding: 20px 0;
  }
`;

export const HeaderItems = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 48px;
  }

  &.logo {
    position: relative;
    width: var(--logo-width);
    height: var(--logo-height);
  }
`;

export const StyledLogo = styled(Logo)`
  width: var(--logo-width);
  height: var(--logo-height);
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;

export const HeaderLink = styled(Link)`
  color: ${Color.blue};
  font-family: ${Font.noto};
  font-weight: ${Weight.bold};
  text-transform: uppercase;
  text-decoration: none;
`;
