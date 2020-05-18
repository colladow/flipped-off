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

export const UPDATE_SET_NAME = 'SETS/UPDATE_SET_NAME';
export const updateSetName = (setId, name) => ({
  type: UPDATE_SET_NAME,
  setId,
  name,
});

export const UPDATE_CARD = 'SETS/UPDATE_CARD';
export const updateCard = (setId, cardIndex, changes) => ({
  type: UPDATE_CARD,
  setId: parseInt(setId),
  cardIndex: parseInt(cardIndex),
  changes,
});

export const DELETE_SET = 'SETS/DELETE_SET';
export const deleteSet = setId => ({
  type: DELETE_SET,
  setId: parseInt(setId),
});
