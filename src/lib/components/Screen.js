import styled from 'styled-components';

import BaseTitle from 'components/base/Title';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

export const Title = styled(BaseTitle)`
  margin-top: ${props => props.theme.margin}px;
  width: 100vw;
  height: 5vh;
  padding: 0 5vw;
  box-sizing: border-box;
`;

export const Content = styled.section`
  margin-top: ${props => props.theme.margin * 4}px;
  padding-bottom: 5vh;
  box-sizing: border-box;
  min-height: 55vh;
`;

export const Footer = styled.section`
  box-sizing: border-box;
  width: 100%;
  bottom: 5vh;
  position: absolute;
`;

export const PaddedContent = styled(Content)`
  padding-bottom: 12vh;

  @media all and (max-height: 800px) {
    padding-bottom: 20vh;
  }
`;

export const FixedFooter = styled(Footer)`
  background-color: ${props => props.theme.color.white};
  padding-bottom: ${props => props.theme.margin * 2}px;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

export default Screen;
