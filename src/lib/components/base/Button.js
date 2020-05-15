import styled from 'styled-components';

const Button = styled.button`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.small}px;
  line-height: ${props => props.theme.font.small * 3}px;
  background-color: ${props => props.theme.color.purple};
  border: none;
  border-radius: 6px;
  color: #fff;
  display: block;
  width: 80vw;
  margin: ${props => props.theme.margin * 2}px auto 0;
`;

export default Button;
