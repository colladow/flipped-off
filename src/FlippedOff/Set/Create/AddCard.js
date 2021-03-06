import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/base/Input';
import Button, { SmallButton } from 'components/base/Button';
import Screen, { PaddedContent, FixedFooter } from 'components/Screen';
import Header, { Left, Right, Title } from 'components/Header';
import EditCard from 'components/Card/Edit';
import Close from 'icons/close.svg';
import handleEnterPress from 'handleEnterPress';
import getFontSize, { LIMIT } from 'getFontSize';

import Success, { toastDuration } from './Success';

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

const SIDES = ['side1', 'side2'];

function AddCard({
  set,
  onCardAdd,
  onDone,
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [card, updateCard] = useState({
    ...initialCard,
  });
  const side1 = useRef(null);
  const side2 = useRef(null);
  let toastTimeout;

  const updateSide = (c, side, changes) => updateCard({
    ...c,
    [side]: {
      ...c[side],
      ...changes,
    },
  })

  useEffect(() => {
    toastTimeout = window.setTimeout(() => setShowSuccess(false), toastDuration - 100);

    return () => {
      if (toastTimeout) {
        window.clearTimeout(toastTimeout);
      }
    };
  }, [showSuccess]);

  const submitCard = () => {
    onCardAdd(card);
    updateCard({
      ...initialCard,
    });
    setShowSuccess(true);
    side1.current.focus();
  };

  return (
    <Screen>
      <Header>
        <Left><Link to="/"><Close /></Link></Left>
        <Title>{set.name}</Title>
        <Right>
          <SmallButton onClick={() => onDone(card)}>
            Finish
          </SmallButton>
        </Right>
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
              autoFocus={side === 'side1'}
              fontSize={getFontSize(card[side].text.length)}
              ref={side === 'side1' ? side1 : side2}
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
        <Button onClick={submitCard}>
          Save &amp; Add Next Card
        </Button>
      </FixedFooter>

      {showSuccess && <Success />}
    </Screen>
  );
}

AddCard.propTypes = {
  set: PropTypes.object,
  onCardAdd: PropTypes.func,
  onDone: PropTypes.func,
};

export default AddCard;
