import data from 'data';

import {
  LOAD,
  CREATE_SET,
  UPDATE_SET_NAME,
  UPDATE_CARD,
  ADD_CARD,
  DELETE_SET,
  DELETE_CARDS,
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

function deleteCards(sets, { setId, cardIndexes }) {
  const set = sets[setId];
  const keep = [];

  set.cards.forEach((card, index) => {
    if (!cardIndexes[index]) {
      keep.push(card);
    }
  });

  return [
    ...sets.slice(0, setId),
    {
      ...set,
      cards: [
        ...keep,
      ],
    },
    ...sets.slice(setId + 1),
  ];
}

function addCard(sets, { setId, card }) {
  const set = sets[setId];

  return [
    ...sets.slice(0, setId),
    {
      ...set,
      cards: [
        ...set.cards,
        card,
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

  [ADD_CARD]: addCard,

  [DELETE_SET]: (sets, { setId }) => ([
    ...sets.slice(0, setId),
    ...sets.slice(setId + 1),
  ]),

  [DELETE_CARDS]: deleteCards,
};

export default function reducer(state, action) {
  const func = setReducerFns[action.type];
  let newState = state;

  if (func) {
    newState = {
      ...state,
      sets: func(state.sets, action),
    };

    data.save(newState);
  }

  return newState;
}
