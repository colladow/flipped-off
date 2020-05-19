const STORAGE_KEY = 'flippedOffSets';

const data = {
  load() {
    let data = window.localStorage.getItem(STORAGE_KEY);

    if (data) {
      data = JSON.parse(data);
    } else {
      data = {
        sets: [],
      };
    }

    return data;
  },

  save(state) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};

export default data;
