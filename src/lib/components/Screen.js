import styled from 'styled-components';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const Content = styled.section`
  box-sizing: border-box;
  margin-top: ${props => props.theme.margin * 2}px;
  padding-bottom: 5vh;
`;

export default Screen;
