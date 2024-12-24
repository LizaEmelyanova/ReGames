import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  padding: 7px;
  border-radius: 15px;
  box-shadow:5px 5px 0px black;
  overflow: hidden;
  width: 100%;
  max-width: 25vw;
  background: #048CD6;
`;