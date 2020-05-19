import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import Screen, { Content, Footer } from 'components/Screen';
import Header, { Left, Title } from 'components/Header';
import CardComponent from 'components/Card';
import Close from 'icons/close.svg';
import handleEnterPress from 'handleEnterPress';

const SIDES = ['side1', 'side2'];
const LIMIT = 30;

function Card({
  set,
  cardIndex,
  onCancelCard,
  onSaveCard,
}) {
  const initialCard = cardIndex === -1 ? {
    side1: {
      text: '',
      imageUrl: '',
    },

    side2: {
      text: '',
      imageUrl: '',
    },
  } : {
    ...set.cards[cardIndex],
  };

  const [card, updateCard] = useState(initialCard);

  const updateSide = (c, side, changes) => updateCard({
    ...c,
    [side]: {
      ...c[side],
      ...changes,
    },
  })

  const submitCard = () => onSaveCard(cardIndex, card);

  return (
    <Screen>
      <Header>
        <Left onClick={onCancelCard}><Close /></Left>
        <Title>{set.name}</Title>
      </Header>

      <Content footerButtons={1}>
        {SIDES.map((side, index) => (
          <CardComponent
            small
            canEditImage
            key={side}
            title={`Side ${index + 1}`}
            footer={`${card[side].text.length}/${LIMIT}`}
            imageUrl={card[side].imageUrl}
            onImageUrlChange={e => updateSide(card, side, {
              imageUrl: e.target.value,
            })}
          >
            <Input
              type="text"
              autoFocus={side === 'side1'}
              value={card[side].text}
              onChange={e => {
                const { value } = e.target;

                if (value.length <= LIMIT) {
                  updateSide(card, side, {
                    text: e.target.value,
                  });
                }
              }}
              onKeyPress={handleEnterPress(submitCard)}
            />
          </CardComponent>
        ))}
      </Content>

      <Footer>
        <Button onClick={submitCard}>Save</Button>
      </Footer>
    </Screen>
  );
}

Card.propTypes = {
  set: PropTypes.object,
  cardIndex: PropTypes.number,
  onCancelCard: PropTypes.func,
  onSaveCard: PropTypes.func,
};

export default Card;
