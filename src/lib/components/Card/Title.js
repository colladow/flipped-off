import styled from 'styled-components';

import Text from 'components/base/Text';

const Title = styled(Text)`
  color: ${props => props.theme.color.darkGray};
  margin-top: ${props => props.theme.margin * 1.5}px;
  text-align: center;
  width: 100%;
`;

export default Title;
