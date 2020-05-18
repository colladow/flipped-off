import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from 'components/base/Input';
import Button, { SmallButton } from 'components/base/Button';
import Screen, { Content, Footer } from 'components/Screen';
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

const SIDES = ['side1', 'side2'];
const LIMIT = 30;

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
        <Right>
          <SmallButton onClick={() => onDone(card)}>
            Finish
          </SmallButton>
        </Right>
      </Header>

      <Content>
        {SIDES.map((side, index) => (
          <Card
            small
            canHaveImage
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
              ref={side === 'side1' ? side1 : null}
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
          </Card>
        ))}
      </Content>

      <Footer>
        <Button onClick={submitCard}>
          Save &amp; Add Next Card
        </Button>
      </Footer>
    </Screen>
  );
}

AddCard.propTypes = {
  set: PropTypes.object,
  onCardAdd: PropTypes.func,
  onDone: PropTypes.func,
};

export default AddCard;
