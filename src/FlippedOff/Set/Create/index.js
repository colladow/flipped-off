import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import SetName from './SetName';
import AddCard from './AddCard';
import { createSet } from '../../actions';

const STEPS = {
  SET_NAME: 0,
  ADD_CARD: 1,
};

function Create({ sets, dispatch }) {
  const [step, setStep] = useState(0);
  const [set, updateSet] = useState({
    name: '',
    cards: [],
  });
  const history = useHistory();

  const Component = step === STEPS.ADD_CARD ? AddCard : SetName;

  return (
    <Component
      set={set}
      onNameChange={name => updateSet({
        ...set,
        name,
      })}
      onCardAdd={card => updateSet({
        ...set,
        cards: [
          ...set.cards,
          card,
        ],
      })}
      onNextClick={() => setStep(STEPS.ADD_CARD)}
      onDone={card => {
        const newSet = {
          ...set,
        };

        if (card.side1.text) {
          newSet.cards = [
            ...newSet.cards,
            card,
          ];
        }

        dispatch(createSet(newSet));
        history.push(`/sets/${sets.length}`);
      }}
    />
  );
}

Create.propTypes = {
  sets: PropTypes.array,
  dispatch: PropTypes.func,
};

export default Create;
