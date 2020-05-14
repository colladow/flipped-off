import styled from 'styled-components';

import Text from './base/Text';

const Header = styled.section`
  width: 100vw;
  height: 10vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  margin-left: 5vw;
`;

export const Right = styled.div`
  margin-right: 5vw;
`;

export const Title = styled(Text)`
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

export default Header;
