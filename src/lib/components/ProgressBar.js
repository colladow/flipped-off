import styled from 'styled-components';

const ProgressBar = styled.div`
  width: 100vw;
  height: 8px;
  background-color: ${props => props.theme.color.gray};
  margin-top: ${props => props.theme.margin}px;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    width: ${props => props.percent}vw;
    background-color: ${props => props.theme.color.purple};
    transition: width 250ms ease-out;
  }

  // TODO: make the bar stick to the top when the user has
  //  scrolled past it
  // --------------------
  // position: fixed;
  // top: 0;
  // left: 0;
  // margin-top: 0;
`;

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;
