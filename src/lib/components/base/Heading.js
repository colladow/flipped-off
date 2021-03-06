import styled from 'styled-components';

import Text from './Text';

const Heading = styled(Text)`
  font-size: ${props => props.theme.font.large}px;
  font-weight: 700;
`;

export default Heading;
