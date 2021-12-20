const initialState = {
  starsCount: [],
  platformCount: [],
  coinsCount: [],
};

const getRandomInt = (range) => {
  return Math.floor(Math.random() * range);
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
      let arrOfPlatforms;
      let platformPosition = () => (getRandomInt(3) + 1) * 27;

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

    case "SET_COINS_COUNT": {
      let coinsPosition = getRandomInt(16);
      return {
        ...state,
        coinsCount: [...state.coinsCount, coinsPosition],
      };
    }
    default:
      return state;
  }
};

export default environment;
