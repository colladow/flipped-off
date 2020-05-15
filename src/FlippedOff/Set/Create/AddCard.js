import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import Screen, { Content } from 'components/Screen';
import Header, { Left, Right, Title } from 'components/Header';
import Card from 'components/Card';
import handleEnterPress from 'handleEnterPress';

const initialCard = {
  side1: {
    text: '',
    imageUrl: '',
  },

  side2: {
    text: '',
    imageUrl: '',
  },
};

function AddCard ({
  set,
  onCardAdd,
  onDone,
}) {
  const side1 = useRef(null);
  const [card, updateCard] = useState({
    ...initialCard,
  });

  const updateSide = (c, side, changes) => updateCard({
    ...c,
    [side]: {
      ...c[side],
      ...changes,
    },
  })

  useEffect(() => side1.current.focus(), []);

  const submitCard = () => {
    onCardAdd(card);
    updateCard({
      ...initialCard,
    });
    side1.current.focus();
  };

  return (
    <Screen>
      <Header>
        <Left><Link to="/">X</Link></Left>
        <Title>{set.name}</Title>
        <Right onClick={() => onDone(card)}>Finish</Right>
      </Header>

      <Content>
        <Card>
          <Input
            type="text"
            ref={side1}
            value={card.side1.text}
            onChange={e => updateSide(card, 'side1', {
              text: e.target.value,
            })}
            onKeyPress={handleEnterPress(submitCard)}
          />
        </Card>

        <Card>
          <Input
            type="text"
            value={card.side2.text}
            onChange={e => updateSide(card, 'side2', {
              text: e.target.value,
            })}
            onKeyPress={handleEnterPress(submitCard)}
          />
        </Card>

        <Button onClick={submitCard}>
          Save &amp; Add Next Card
        </Button>
      </Content>
    </Screen>
  );
}

AddCard.propTypes = {
  set: PropTypes.object,
  onCardAdd: PropTypes.func,
  onDone: PropTypes.func,
};

export default AddCard;
