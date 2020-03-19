import styled from 'styled-components';

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CardDisplay = styled.section`
  display: flex;
  height: 70%;
  box-sizing: border-box;
  border-bottom: 1px solid #a1a1a1;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.section`
  height: calc(30% - 1px);
  box-sizing: border-box;
  overflow-y: hdden;
`;

export default Screen;
