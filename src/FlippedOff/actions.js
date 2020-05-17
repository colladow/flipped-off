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