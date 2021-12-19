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
      let arrOfPlatforms;
      let platformPosition = () => (getRandomInt() + 1) * 27;

      if (typeof action.payload === "object") {
        arrOfPlatforms = [...state.platformCount, platformPosition()];
      } else {
        platformPosition = state.platformCount.map((item, index) =>
          index === action.payload ? (item = platformPosition()) : item
        );
        arrOfPlatforms = platformPosition;
      }

      return {
        ...state,
        platformCount: arrOfPlatforms,
      };
    }
    default:
      return state;
  }
};

export default environment;
