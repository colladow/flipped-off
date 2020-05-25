import styled from 'styled-components';

const TextArea = styled.textarea`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.fontSize || props.theme.font.medium}px;
  line-height: 150%;
  font-weight: 500;
  color: ${props => props.theme.color.base};
  border: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: ${props => props.theme.font.small * 1.5 * 4}px;
`;

export default TextArea;
