import Expand from '@assets/svgs/Expand';
import { Color, Font, Weight, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export interface SectionStylesProps {
  background: string;
}

export const Section = styled.article`
  --section-color: ${Color.pinkLight};
  --padding-x: ${rem(30)};
  border: 3px solid var(--section-color);
  border-radius: 10px;

  @media ${Screen.mobile} {
    --padding-x: ${rem(15)};
  }

  &:not(:first-of-type) {
    margin-top: ${rem(20)};
  }

  &:nth-of-type(3n + 2) {
    --section-color: ${Color.sageLight};
  }

  &:nth-of-type(3n + 3) {
    --section-color: ${Color.orangeLight};
  }
`;

export const ExpandIcon = styled(Expand)<{ isOpen: boolean }>`
  --size: ${rem(26)};
  position: absolute;
  right: var(--padding-x);
  width: var(--size);
  height: var(--size);
  transform-origin: center;
  transition: transform 300ms ease 300ms;

  path {
    transform-origin: center;
    transition: transform 300ms ease;
  }

  &.open {
    transform: rotate(45deg);
    transition: transform 300ms ease;

    path {
      transition: transform 300ms ease 300ms;

      &:first-of-type {
        transform: rotate(45deg);
      }
      &:last-of-type {
        transform: rotate(-45deg);
      }
    }
  }

  @media ${Screen.mobile} {
    --size: ${rem(20)};
  }
`;

export const AccordionButton = styled.button`
  position: relative;
  border: 0;
  padding: 0;
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  background: var(--section-color);
  padding: ${rem(24)} var(--padding-x);

  @media ${Screen.mobile} {
    padding: ${rem(18)} var(--padding-x);
  }
`;

export const Heading = styled.h2`
  font-size: ${rem(18)};
  line-height: 1.2;
  padding-right: ${rem(25)};
  text-align: left;

  @media ${Screen.mobile} {
    font-size: ${rem(16)};
  }
`;

export const AccordionSection = styled.div<{
  panelHeight?: number;
}>`
  max-height: ${({ panelHeight }) =>
    panelHeight || panelHeight === 0 ? `${panelHeight}px` : 'none'};
  transition: max-height 300ms ease;
  overflow: hidden;
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${rem(30)} ${rem(50)};
  padding: ${rem(30)} var(--padding-x);

  @media ${Screen.mobile} {
    grid-template-columns: 1fr;
    padding: ${rem(25)} var(--padding-x);
  }
`;

export interface SubSectionStylesProps {
  width?: string;
}

export const SubSection = styled.article<SubSectionStylesProps>`
  ${({ width }) => width && `grid-column: span ${width};`}

  @media ${Screen.mobile} {
    grid-column: 1 / -1;
  }
`;

export const SubSectionHeadingWrap = styled.div<{ noMargin: boolean }>`
  ${({ noMargin }) => !noMargin && `margin-bottom: ${rem(15)};`}
`;

export const SubSectionHeading = styled.h3`
  --heading-size: ${rem(18)};
  font-family: ${Font.noto};
  font-size: var(--heading-size);
  margin-bottom: ${rem(5)};
  line-height: 1.2;

  time {
    font-size: ${rem(16)};
    white-space: nowrap;
  }

  @media ${Screen.mobileUp} {
    --heading-size: ${rem(16)};
    display: flex;
    justify-content: space-between;

    #section-education & {
      justify-content: flex-start;

      time {
        font-size: var(--heading-size);

        &::before {
          content: '|';
          padding: 6px;
        }
      }
    }
  }

  span {
    font-weight: ${Weight.bold};
    padding-right: ${rem(10)};

    @media ${Screen.mobile} {
      display: block;
      padding-right: 0;
    }
  }
`;

export const SubHeading = styled.span`
  font-style: italic;
`;
