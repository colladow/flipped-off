import { LOAD } from './actions';

export const initialState = {
  sets: [],
};

export default function reducer(state, action) {
  switch(action.type) {
    case LOAD:
      return {
        ...state,
        sets: action.sets,
      };
    default:
      state;
  }
}
