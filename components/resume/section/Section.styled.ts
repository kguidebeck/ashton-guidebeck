import { Color, Font, Weight, Screen } from '@styles/constants';
import styled from 'styled-components';

export interface SectionStylesProps {
  background: string;
}

export const Section = styled.article<SectionStylesProps>`
  padding: 75px 0;

  ${({ background }) => `
    background-color: ${Color[background]};
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
`;

export const Heading = styled.h2`
  grid-column: 1 / -1;
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
