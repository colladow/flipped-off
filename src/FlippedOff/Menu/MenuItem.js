import styled from 'styled-components';

import Text from 'components/base/Text';

const MenuItem = styled(Text)`
  min-height: ${props => props.theme.font.base * 4}px;
  color: #fff;
  border: 3px solid #fff;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: ${props => props.theme.margin}px;
  padding: 11px;
`;

export const Primary = styled(MenuItem)`
  color: ${props => props.theme.color.purple};
  background-color: #fff;
  margin-top: 0;
`;

export default MenuItem;
