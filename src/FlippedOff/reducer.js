import {
  LOAD,
  CREATE_SET,
  UPDATE_CARD,
} from './actions';

export const initialState = {
  sets: [],
};

function updateCard(sets, { setId, cardIndex, changes}) {
  const set = sets[setId];
  const card = set.cards[cardIndex];

  return [
    ...sets.slice(0, setId),
    {
      ...set,
      cards: [
        ...set.cards.slice(0, cardIndex),
        {
          ...card,
          ...changes,
        },
        ...set.cards.slice(cardIndex + 1),
      ],
    },
    ...sets.slice(setId + 1),
  ];
}

export default function reducer(state, action) {
  switch(action.type) {
    case LOAD:
      return {
        ...state,
        sets: action.sets,
      };
    case CREATE_SET:
      return {
        ...state,
        sets: [
          ...state.sets,
          action.set,
        ],
      };
    case UPDATE_CARD:
      return {
        ...state,
        sets: updateCard(state.sets, action),
      };
    default:
      state;
  }
}
