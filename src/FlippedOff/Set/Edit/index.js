import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';

const STEPS = {
  SET: 0,
  CARD: 1,
};

import Set from './Set';
import Card from './Card';
import { updateCard } from '../../actions';

function Edit({ sets, dispatch }) {
  const [step, setStep] = useState(STEPS.SET);
  const [cardIndex, setCardIndex] = useState(null);
  const { id } = useParams();
  const set = sets[id];

  if (sets.length === 0) {
    return null;
  }

  if (!sets[id]) {
    return <Redirect to="/" />;
  }

  const Component = step === STEPS.CARD ? Card : Set;

  return (
    <Component
      set={set}
      cardIndex={cardIndex}
      onCardClick={index => {
        setCardIndex(index);
        setStep(STEPS.CARD);
      }}
      onCancelCard={() => {
        setStep(STEPS.SET);
        setCardIndex(null);
      }}
      onSaveCard={changes => {
        dispatch(updateCard(id, cardIndex, changes));
        setStep(STEPS.SET);
        setCardIndex(null);
      }}
    />
  );
}

Edit.propTypes = {
  sets: PropTypes.array,
  dispatch: PropTypes.func,
};

export default Edit;