import styled from 'styled-components';

export const StyledCell = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(${props => props.color}, 1);
  border: ${props => (props.type === 0 ? 'none' : '1px solid')};
  margin: ${({ type }) => (type === 0 ? '0' : '1px solid')};
`