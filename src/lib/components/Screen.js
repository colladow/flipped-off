import styled from 'styled-components';

import BaseTitle from 'components/base/Title';

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const Title = styled(BaseTitle)`
  margin-top: ${props => props.theme.margin * 2}px;
  width: 100vw;
  height: 5vh;
  padding: 0 5vw;
  box-sizing: border-box;
`;

export const Content = styled.section`
  margin-top: ${props => props.theme.margin * 4}px;
  padding-bottom: 5vh;
  box-sizing: border-box;
  min-height: 65vh;
`;

export const Footer = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 5vh;
`;

export default Screen;
