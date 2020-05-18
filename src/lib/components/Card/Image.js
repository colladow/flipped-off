import styled from 'styled-components';

import Input from 'components/base/Input';

const Image = styled.img`
  // min-height: 100%;
`;

export const EditImage = styled.i`
  position: absolute;
  top: ${props => props.theme.margin * 1.5}px;
  right: ${props => props.theme.margin * 1.5}px;
`;

export const ImageInput = styled(Input)`
  margin: ${props => props.theme.margin}px auto 0;
  font-size: ${props => props.theme.font.base}px;
  padding: 0 ${props => props.theme.margin}px;
  display: block;
  border-bottom: 1px solid #000;
  text-align: left;
  width: 80vw;
`;

export default Image;
