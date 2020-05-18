import styled from 'styled-components';

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;

`;

export const Box = styled.div`
  width: calc(26vw - ${props => props.theme.margin / 2}px);
  height: calc(26vw - ${props => props.theme.margin / 2}px);
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
`;

export default Grid;
