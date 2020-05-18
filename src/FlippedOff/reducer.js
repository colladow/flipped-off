import {
  LOAD,
  CREATE_SET,
  UPDATE_SET_NAME,
  UPDATE_CARD,
  DELETE_SET,
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

  [CREATE_SET]: (sets, { set }) => ([
    ...sets,
    set,
  ]),

  [UPDATE_SET_NAME]: (sets, { setId, name }) => {
    const set = sets[setId];

    return [
      ...sets.slice(0, setId),
      {
        ...set,
        name: name,
      },
    ];
  },

  [UPDATE_CARD]: updateCard,

  [DELETE_SET]: (sets, { setId }) => ([
    ...sets.slice(0, setId),
    ...sets.slice(setId + 1),
  ]),
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
