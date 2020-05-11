import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background-color: lightpink;
  z-index: 100;
  border-right: 1px solid ${props => props.theme.borderColor};
  transition: left 300ms ease-in;
  box-sizing: border-box;
  padding-top: 25%;
  padding-bottom: 5%;

  &.hidden {
    left: -40%;
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
export MenuItem from './MenuItem';

export default Menu;
