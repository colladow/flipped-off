import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/base/Input';
import Button from 'components/base/Button';
import Screen, { PaddedContent, FixedFooter } from 'components/Screen';
import Header, { Left, Title } from 'components/Header';
import EditCard from 'components/Card/Edit';
import Close from 'icons/close.svg';
import handleEnterPress from 'handleEnterPress';
import getFontSize, { LIMIT } from 'getFontSize';

const SIDES = ['side1', 'side2'];

function Card({
  set,
  cardIndex,
  onCancelCard,
  onSaveCard,
}) {
  const side2 = useRef(null);
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

      <PaddedContent>
        {SIDES.map((side, index) => (
          <EditCard
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
              fontSize={getFontSize(card[side].text.length)}
              autoFocus={side === 'side1'}
              ref={side === 'side2' ? side2 : null}
              value={card[side].text}
              onChange={e => {
                const { value } = e.target;

                if (value.length <= LIMIT) {
                  updateSide(card, side, {
                    text: e.target.value,
                  });
                }
              }}
              onKeyPress={handleEnterPress(() => {
                if (side === 'side1') {
                  side2.current.focus();
                } else {
                  submitCard();
                }
              })}
            />
          </EditCard>
        ))}
      </PaddedContent>

      <FixedFooter>
        <Button onClick={submitCard}>Save</Button>
      </FixedFooter>
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
