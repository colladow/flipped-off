import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: lightpink;
  z-index: 100;
  border-right: 1px solid ${props => props.theme.borderColor};
  transition: left 300ms ease-in;
  box-sizing: border-box;
  padding-top: 20%;
  padding-bottom: 5%;

  &.hidden {
    left: -30%;
  }
`;

const Items = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

const Menu = ({ children }) => (
  <Container>
    <Items>{children}</Items>
  </Container>
);

Menu.propTypes = {
  children: PropTypes.node,
};

export const MenuItem = styled.div`
  font-size: 24px;
  line-height: 48px;
  box-sizing: border-box;
  padding-left: 16px;
`;

export default Menu;
