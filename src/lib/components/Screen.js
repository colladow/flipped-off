import styled from 'styled-components';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const Content = styled.section`
  margin-top: ${props => props.theme.margin * 4}px;
  box-sizing: border-box;
  padding-bottom: calc(5vh + 36px); // compensate for Footer presence
`;

export const Footer = styled.section`
  position: fixed;
  bottom: ${props => props.theme.margin * 2}px;
  box-sizing: border-box;
  width: 100%;
  z-index: 102;
`;

export default Screen;
