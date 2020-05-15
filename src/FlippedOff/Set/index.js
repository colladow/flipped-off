import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Screen, { Content } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';

import { Hamburger } from '../Menu/';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const Set = ({ set, onMenuClick }) => {
  const [percent, setPercent] = useState(0);
  const size = (set.cards && set.cards.length) || 0;

  return (
    <Screen>
      <Header>
        <Left><Hamburger onClick={onMenuClick} /></Left>
        <Right>Edit</Right>
      </Header>

      <Controls>
        {set.name || ''}
      </Controls>

      <ProgressBar percent={percent} />

      <Content>
        {set.cards && set.cards.map((card, index) => (
          <Card
            key={index}
            onClick={() => setPercent(100/size * (index + 1))}
          >
            {card.side1.text}
          </Card>
        ))}
      </Content>
    </Screen>
  );
};

Set.propTypes = {
  set: PropTypes.object,
  onMenuClick: PropTypes.func,
};

export default Set;
