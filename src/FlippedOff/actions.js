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

export const ADD_CARD = 'SETS/ADD_CARD';
export const addCard = (setId, card) => ({
  type: ADD_CARD,
  setId: parseInt(setId),
  card,
});

export const DELETE_SET = 'SETS/DELETE_SET';
export const deleteSet = setId => ({
  type: DELETE_SET,
  setId: parseInt(setId),
});

export const DELETE_CARDS = 'SETS/DELETE_CARDS';
export const deleteCards = (setId, cardIndexes) => ({
  type: DELETE_CARDS,
  setId: parseInt(setId),
  cardIndexes,
});
