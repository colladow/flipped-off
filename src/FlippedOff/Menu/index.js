import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #000;
  z-index: 100;
  transition: left 300ms ease-in;
  box-sizing: border-box;
  padding: 25% 5% 5% 5%;

  &.hidden {
    left: -50%;
  }
`;

const Items = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const Menu = ({ hidden, children }) => (
  <Container className={hidden && 'hidden'}>
    <Items>{children}</Items>
  </Container>
);

Menu.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node,
};

export Hamburger from './Hamburger';
export MenuItem, { Primary } from './MenuItem';

export default Menu;
