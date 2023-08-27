import Expand from '@assets/svgs/Expand';
import { Color, Font, Weight, Screen, Ease } from '@styles/constants';
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(24)} var(--padding-x);
  border: 0;
  border-radius: 3px;
  background: var(--section-color);
  color: ${Color.black};

  @media ${Screen.mobile} {
    padding: ${rem(18)} var(--padding-x);
  }
`;

export const Heading = styled.h2`
  padding-right: ${rem(25)};
  font-size: ${rem(18)};
  line-height: 1.2;
  text-align: left;

  @media ${Screen.mobile} {
    font-size: ${rem(16)};
  }
`;

export const AccordionSection = styled.div<{
  panelHeight?: number;
}>`
  overflow: hidden;
  max-height: ${({ panelHeight }) =>
    panelHeight || panelHeight === 0 ? `${panelHeight}px` : '0'};
  transition: max-height 500ms ${Ease.out};
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
  margin-bottom: ${rem(5)};
  font-family: ${Font.noto};
  font-size: var(--heading-size);
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

      span {
        padding-right: 0;
      }

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
    padding-right: ${rem(10)};
    font-weight: ${Weight.bold};

    @media ${Screen.mobile} {
      display: block;
      padding-right: 0;
    }
  }
`;

export const SubHeading = styled.span`
  font-style: italic;
`;
