import styled from 'styled-components';

const TextArea = styled.textarea`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.medium}px;
  line-height: ${props => props.theme.font.medium * 1.5}px;
  font-weight: 500;
  color: ${props => props.theme.color.base};
  border: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: ${props => props.theme.font.medium * 1.5 * 2}px;
`;

export default TextArea;
