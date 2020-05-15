import styled from 'styled-components';

import Text from './Text';

const Title = styled(Text)`
  font-size: ${props => props.theme.font.medium}px;
  font-weight: 700;
`;

export default Title;
