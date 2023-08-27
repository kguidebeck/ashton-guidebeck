import styled from 'styled-components';

export const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const UnstyledListItem = styled.li<{
  display?: 'block' | 'inline-block' | 'inline';
}>`
  display: ${({ display }) => display || 'inline-block'};
`;
