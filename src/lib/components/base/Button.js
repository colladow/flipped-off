import styled from 'styled-components';

const Button = styled.button`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.small}px;
  line-height: ${props => props.theme.font.small * 3}px;
  background-color: ${props => props.theme.color.purple};
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  color: #fff;
  display: block;
  width: 80vw;
  margin: ${props => props.theme.margin * 2}px auto 0;
`;

export const SmallButton = styled.button`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.small}px;
  line-height: ${props => props.theme.font.small * 3}px;
  border: 1px solid ${props => props.theme.color.purple};
  color: ${props => props.theme.color.purple};
  padding: 0 ${props => props.theme.margin}px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

export default Button;
