import data from 'data';

export const LOAD = 'SETS/LOAD';
export const loadData = () => ({
  type: LOAD,
  sets: data.sets,
});

export const CREATE_SET = 'SETS/CREATE';
export const createSet = set => ({
  type: CREATE_SET,
  set,
});

export const UPDATE_CARD = 'SETS/UPDATE_CARD';
export const updateCard = (setId, cardIndex, changes) => ({
  type: UPDATE_CARD,
  setId: parseInt(setId),
  cardIndex: parseInt(cardIndex),
  changes,
});
