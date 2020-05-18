import {
  LOAD,
  CREATE_SET,
  UPDATE_SET_NAME,
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

const setReducerFns = {
  [LOAD]: (sets, action) => ([
    ...action.sets,
  ]),

  [CREATE_SET]: (sets, action) => ([
    ...sets,
    action.set,
  ]),

  [UPDATE_SET_NAME]: (sets, action) => {
    const set = sets[action.setId];

    return [
      ...sets.slice(0, action.setId),
      {
        ...set,
        name: action.name,
      },
    ];
  },

  [UPDATE_CARD]: updateCard,
};

export default function reducer(state, action) {
  const func = setReducerFns[action.type];

  if (func) {
    return {
      ...state,
      sets: func(state.sets, action),
    };
  }

  return state;
}
