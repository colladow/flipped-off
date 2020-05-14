import styled from 'styled-components';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: ${props => props.theme.margin * 2}px;
`;

export default Screen;
