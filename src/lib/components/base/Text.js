import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.base}px;
  line-height: ${props => props.theme.font.base * 1.5}px;
  font-weight: 500;
  color: ${props => props.theme.color[props.color] || props.theme.color.base};
`;

export default Text;
