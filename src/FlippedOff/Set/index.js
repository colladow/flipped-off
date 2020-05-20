import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, useParams } from 'react-router-dom';

import Screen, { Content, Title } from 'components/Screen';
import Header, { Left, Right } from 'components/Header';
import Card from 'components/Card';
import Menu from 'icons/menu.svg';
import Arrow from 'icons/arrow.svg'; 

import ProgressBar from './ProgressBar';

function Set({ sets }) {
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
        <Left><Link to="/"><Arrow /></Link></Left>
        <Right><Link to={`/sets/${id}/edit`}><Menu /></Link></Right>
      </Header>

      <Title>{set.name || ''}</Title>

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
};

export default Set;
