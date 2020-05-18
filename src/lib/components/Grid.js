import styled from 'styled-components';

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Box = styled.div`
  width: calc(29vw - ${props => props.theme.margin / 2}px);
  height: calc(29vw - ${props => props.theme.margin / 2}px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 16px;
  margin: 0 ${props => props.theme.margin}px ${props => props.theme.margin}px 0;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:before {
    content: ' ';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border: 1px solid #000;
    border-top-width: 0;
    border-right-width: 0;
    border-radius: 20px 0 20px 16px;
    bottom: -4px;
    left: -4px;
  }

  &:after {
    content: ' ';
    position: absolute;
    bottom: ${props => props.theme.margin}px;
    right: ${props => props.theme.margin}px;
    width: 22px;
    height: 22px;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid ${props => props.theme.color.red};
    visibility: ${props => props.selectMode ? 'visible' : 'hidden'};
    transition: background-color 100ms linear;

    ${props => props.selected && `background-color: ${props.theme.color.red};`}
  }
`;

export default Grid;
