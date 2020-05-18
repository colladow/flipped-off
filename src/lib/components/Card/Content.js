import styled from 'styled-components';

import Heading from 'components/base/Heading';

const Content = styled(Heading)`
  margin-top: ${props => props.theme.margin}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
`;

export default Content;
