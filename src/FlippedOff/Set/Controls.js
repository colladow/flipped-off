import styled from 'styled-components';

import Text from 'components/base/Text';

const Controls = styled.div`
  background-color: ${props => props.theme.color.base};
  position: absolute;
  top: 80%;
  right: ${props => props.theme.margin / 2}px;
  width: 30vw;
  z-index: 103;
  box-sizing: border-box;
  padding: ${props => props.theme.margin}px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: top 250ms ease-in, opacity 250ms ease-in-out;

  ${props => props.visible && `
    top: 100%;
    opacity: 1;
  `}
`;

export const Button = styled(Text)`
  font-size: ${props => props.theme.font.small}px;
  font-weight: 700;
  color: ${props => props.theme.color.white};
  cursor: pointer;
  margin-top: ${props => props.theme.margin}px;

  &:first-child {
    margin-top: 0;
  }
`;

export default Controls;
