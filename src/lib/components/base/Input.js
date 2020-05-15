import styled from 'styled-components';

const Input = styled.input`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.medium}px;
  line-height: ${props => props.theme.font.medium * 1.5}px;
  font-weight: 500;
  color: ${props => props.theme.color.base};
  border: 0;
  padding: 0;
  text-align: center;
`;

export default Input;
