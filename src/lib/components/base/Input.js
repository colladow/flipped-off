import styled from 'styled-components';

const Input = styled.input`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.fontSize || props.theme.font.medium}px;
  line-height: 150%;
  font-weight: 500;
  color: ${props => props.theme.color.base};
  border: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  transition: font-size 100ms ease-in;
`;

export default Input;
