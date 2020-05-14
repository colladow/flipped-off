import React from 'react';
import PropTypes from 'prop-types';

import Screen, { Content } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';

import { Hamburger } from '../Menu/';

const Set = ({ onMenuClick }) => (
  <Screen>
    <Header>
      <Left><Hamburger onClick={onMenuClick} /></Left>
      <Right>Edit</Right>
    </Header>

    <Content>
      <Card>Hola</Card>
      <Card>Manzana</Card>
    </Content>
  </Screen>
);

Set.propTypes = {
  onMenuClick: PropTypes.func,
};

export default Set;
