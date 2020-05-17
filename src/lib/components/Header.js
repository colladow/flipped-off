import styled from 'styled-components';

import Text from './base/Text';

const Header = styled.section`
  width: 100vw;
  height: 10vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Control = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Left = styled(Control)`
  left: 5vw;
`;

export const Right = styled(Control)`
  right: 5vw;
`;

export const Title = styled(Text)`
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export default Header;
