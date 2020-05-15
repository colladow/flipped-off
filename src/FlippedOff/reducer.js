import { LOAD, CREATE_SET } from './actions';

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
    case CREATE_SET:
      return {
        ...state,
        sets: [
          ...state.sets,
          action.set,
        ],
      };
    default:
      state;
  }
}
