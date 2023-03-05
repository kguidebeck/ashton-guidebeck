import { Color } from '@styles/constants';
import styled from 'styled-components';

export interface SectionStylesProps {
  background: string;
}

export const Section = styled.article<SectionStylesProps>`
  padding: 40px 0;

  ${({ background }) => `
    background-color: ${Color[background]}`}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px;
`;

export const Heading = styled.h2`
  grid-column: 1/-1;
`;

export interface SubSectionStylesProps {
  width?: string;
}

export const SubSection = styled.article<SubSectionStylesProps>`
  padding: 10px;
  background: green;

  ${({ width }) => width && `grid-column: span ${width};`}
`;
