import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import MenuItem, { Primary } from './MenuItem';

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

const Menu = ({
  sets,
  hidden,
  onToggleMenu,
}) => (
  <Container className={hidden && 'hidden'}>
    <FixedHamburger onClick={onToggleMenu} />

    <Items>
      <Link
        to="/sets/create"
        onClick={onToggleMenu}
      >
        <Primary>Create New +</Primary>
      </Link>

      {sets && sets.map((set, index) => (
        <Link
          to={`/sets/${index}`}
          key={set.name + index}
          onClick={onToggleMenu}
        >
          <MenuItem>{set.name}</MenuItem>
        </Link>
      ))}
    </Items>
  </Container>
);

Menu.propTypes = {
  sets: PropTypes.array,
  hidden: PropTypes.bool,
  onToggleMenu: PropTypes.func,
};

export default Menu;
