import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.base}px;
  font-weight: medium;
  color: ${props => props.theme.color.base};
`;

export default Text;
