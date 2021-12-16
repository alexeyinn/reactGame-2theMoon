const initialState = {
  isLoaded: false,
  starsCount: [],
};

const environment = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOADED": {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case "SET_STARS_COUNT": {
      let starsPosition = state.starsCount.length * 24;
      return {
        ...state,
        starsCount: [...state.starsCount, starsPosition],
      };
    }
    default:
      return state;
  }
};

export default environment;
