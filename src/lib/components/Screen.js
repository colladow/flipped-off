import styled from 'styled-components';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const Content = styled.section`
  margin-top: ${props => props.theme.margin * 4}px;
  padding-bottom: 5vh;
  box-sizing: border-box;

  ${props => props.footerButtons && `
    // the extra 24px is for mobile keyboards
    padding-bottom: calc(5vh + ${props.theme.margin * 3 * props.footerButtons}px + 24px);
  `}
`;

export const Footer = styled.section`
  position: fixed;
  bottom: ${props => props.theme.margin * 2}px;
  box-sizing: border-box;
  width: 100%;
  z-index: 102;
`;

export default Screen;
