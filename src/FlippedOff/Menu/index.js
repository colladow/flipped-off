import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hamburger from './Hamburger';

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  background-color: #000;
  z-index: 100;
  transition: left 300ms ease-in;
  box-sizing: border-box;
  padding: 25vh 5vw 5vh 5vw;

  &.hidden {
    left: -50vw;
  }
`;

const Items = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const FixedHamburger = styled(Hamburger)`
  position: absolute;
  top: 2.5vh;
  left: 5vw;
`;

const Menu = ({ hidden, onHamburgerClick, children }) => (
  <Container className={hidden && 'hidden'}>
    <FixedHamburger onClick={onHamburgerClick} />

    <Items>{children}</Items>
  </Container>
);

Menu.propTypes = {
  hidden: PropTypes.bool,
  onHamburgerClick: PropTypes.func,
  children: PropTypes.node,
};

export Hamburger from './Hamburger';
export MenuItem, { Primary } from './MenuItem';

export default Menu;
