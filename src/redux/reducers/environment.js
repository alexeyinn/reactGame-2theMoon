const initialState = {
  starsCount: [],
  platformCount: [],
};

const environment = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STARS_COUNT": {
      let starsPosition = state.starsCount.length * 24;
      return {
        ...state,
        starsCount: [...state.starsCount, starsPosition],
      };
    }
    case "SET_PLATFORM_COUNT": {
      const getRandomInt = () => {
        return Math.floor(Math.random() * 3);
      };
      let platformPosition = (getRandomInt() + 1) * 27;
      return {
        ...state,
        platformCount: [...state.platformCount, platformPosition],
      };
    }
    default:
      return state;
  }
};

export default environment;
