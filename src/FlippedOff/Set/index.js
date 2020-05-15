import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import Screen, { Content } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';

import { Hamburger } from '../Menu/';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const Set = ({ sets, onMenuClick }) => {
  const [percent, setPercent] = useState(0);
  const history = useHistory();
  const id = parseInt(useParams().id);
  const set = sets.length && sets[id];

  if (sets.length && !sets[id]) {
    history.replace('/');
    return null;
  }

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
  sets: PropTypes.array,
  onMenuClick: PropTypes.func,
};

export default Set;
