import styled from 'styled-components';

import Text from './Text';

const Title = styled(Text)`
  font-size: ${props => props.theme.font.medium}px;
  font-weight: bold;
`;

export default Title;
