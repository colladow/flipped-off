import styled from 'styled-components';

import Title from './Title';

const Footer = styled(Title)`
  margin: 0 ${props => `${props.theme.margin * 2}px ${props.theme.margin}px`} 0;
  text-align: right;
`;

export default Footer;
