import styled from 'styled-components';

const Button = styled.button`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.base}px;
  line-height: ${props => props.theme.font.base * 3}px;
  background-color: ${props => props.theme.color.purple};
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.color.white};
  display: block;
  width: 80vw;
  margin: ${props => props.theme.margin}px auto 0;
  text-transform: uppercase;
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
  background-color: ${props => props.theme.color.white};
  font-weight: 700;
  text-transform: uppercase;
`;

export default Button;
