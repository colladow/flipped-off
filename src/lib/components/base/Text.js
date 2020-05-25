import styled from 'styled-components';

const Text = styled.p`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.fontSize || props.theme.font.base}px;
  line-height: 150%;
  font-weight: 500;
  color: ${props => props.theme.color[props.color] || props.theme.color.base};
  ${props => props.align && `text-align: ${props.align};`}
`;

export default Text;
