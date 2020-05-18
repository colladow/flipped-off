import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useParams } from 'react-router-dom';

import Screen, { Content } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';

import Hamburger from '../Menu/Hamburger';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

function Set({ sets, onMenuClick }) {
  const [percent, setPercent] = useState(0);
  const id = parseInt(useParams().id);
  const set = sets.length && sets[id];

  if (sets.length && !sets[id]) {
    return <Redirect to="/" />;
  }

  const size = (set.cards && set.cards.length) || 0;

  return (
    <Screen>
      <Header>
        <Left><Hamburger onClick={onMenuClick} /></Left>
        <Right><Link to={`/sets/${id}/edit`}>Edit</Link></Right>
      </Header>

      <Controls>
        {set.name || ''}
      </Controls>

      <ProgressBar percent={percent} />

      <Content>
        {set.cards && set.cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.side1.imageUrl}
            onClick={() => setPercent(100/size * (index + 1))}
          >
            {card.side1.text}
          </Card>
        ))}
      </Content>
    </Screen>
  );
}

Set.propTypes = {
  sets: PropTypes.array,
  onMenuClick: PropTypes.func,
};

export default Set;
