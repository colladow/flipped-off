import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Screen, { Content } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';

import { Hamburger } from '../Menu/';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const Set = ({ onMenuClick }) => {
  const [percent, setPercent] = useState(0);

  return (
    <Screen>
      <Header>
        <Left><Hamburger onClick={onMenuClick} /></Left>
        <Right>Edit</Right>
      </Header>

      <Controls>
        Spanish Basics
      </Controls>

      <ProgressBar percent={percent} />

      <Content>
        <Card onClick={() => setPercent(25)}>Hola</Card>
        <Card onClick={() => setPercent(75)}>Manzana</Card>
      </Content>
    </Screen>
  );
};

Set.propTypes = {
  onMenuClick: PropTypes.func,
};

export default Set;
