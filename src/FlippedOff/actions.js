import data from 'data';

export const LOAD = 'SETS/LOAD';
export const loadData = () => ({
  type: LOAD,
  sets: data.sets,
});
