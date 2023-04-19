import Expand from '@assets/svgs/Expand';
import { Color, Font, Weight, Screen } from '@styles/constants';
import { rem } from '@styles/helpers';
import styled from 'styled-components';

export interface SectionStylesProps {
  background: string;
}

export const Section = styled.article`
  border-radius: 10px;
  --section-color: ${Color.pinkLight};
  border: 3px solid var(--section-color);

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
  width: ${rem(26)};
  height: ${rem(26)};

  .vertical-path {
    transform-origin: center;
    transition: transform 300ms ease;

    ${({ isOpen }) => isOpen && `transform: scaleY(0)`}
  }
`;

export const AccordionButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  background: var(--section-color);
  padding: ${rem(24)} ${rem(30)};
`;

export const Heading = styled.h2`
  font-size: ${rem(18)};
  line-height: 1;
`;

export const AccordionSection = styled.div<{
  panelHeight: number;
}>`
  max-height: ${({ panelHeight }) => panelHeight && `${panelHeight}px`};
  transition: max-height 300ms ease;
  overflow: hidden;
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
  padding: ${rem(30)};
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

export const SubSectionHeading = styled.h3`
  font-family: ${Font.lora};
  font-weight: ${Weight.regular};

  @media ${Screen.mobileUp} {
    display: flex;
    justify-content: space-between;

    #education & {
      justify-content: flex-start;

      time {
        &::before {
          content: '|';
          padding: 6px;
        }
      }
    }
  }

  span {
    font-weight: ${Weight.bold};

    @media ${Screen.mobile} {
      display: block;
    }
  }
`;

export const SubHeading = styled.span`
  font-style: italic;
`;
