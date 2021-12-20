const initialState = {
  coinsCount: [],
};

const getRandomInt = (range) => {
  return Math.floor(Math.random() * range);
};

const coins = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COINS_COUNT": {
      let newCoinsArr = state.coinsCount;

      if (Array.isArray(action.payload) === false) {
        delete newCoinsArr[action.payload];
      } else {
        newCoinsArr = [...state.coinsCount, getRandomInt(16)];
      }

      return {
        ...state,
        coinsCount: newCoinsArr,
      };
    }

    default:
      return state;
  }
};

export default coins;
