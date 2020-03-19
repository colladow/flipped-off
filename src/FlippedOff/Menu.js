import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: papayawhip;
  z-index: 100;
  border-right: 1px solid #a1a1a1;
  transition: left 300ms ease-in;

  &.hidden {
    left: -30%;
  }
`;

export default Menu;
