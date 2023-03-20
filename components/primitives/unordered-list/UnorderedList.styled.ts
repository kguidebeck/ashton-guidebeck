import styled, { css } from 'styled-components';

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

UnstyledList.Item = styled.li`
  display: ${(props) => props.display || 'inline-block'};
`;

UnstyledList.propTypes = {
  styles: PropTypes.string,
};

UnstyledList.Item.propTypes = {
  display: PropTypes.string,
};

export default UnstyledList;
