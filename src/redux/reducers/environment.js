const initialState = {
  starsCount: [],
  platformCount: [],
  gameScore: "$0000000",
  gameIsStarts: false,
  soundVolumeLvl: 1,
  musicVolumeLvl: 0.2,
  gameOver: false,
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

    case "SET_GAME_IS_STARTS": {
      return {
        ...state,
        gameIsStarts: !state.gameIsStarts,
      };
    }

    case "SET_SOUND_IS_ENABLE": {
      let muteSFX = state.soundVolumeLvl ? 0 : 1;
      let muteMusic = state.soundVolumeLvl ? 0 : 0.2;

      return {
        ...state,
        soundVolumeLvl: muteSFX,
        musicVolumeLvl: muteMusic,
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

    case "SET_GAME_SCORE": {
      let newCount;
      let newScore = +state.gameScore.match(/\d+/) + action.payload;
      let newScoreInStr = newScore.toString();
      let emptySlots = 7 - newScoreInStr.length;

      if (emptySlots === 3) {
        newCount = "$000" + newScoreInStr;
      } else if (emptySlots === 2) {
        newCount = "$00" + newScoreInStr;
      } else if (emptySlots === 1) {
        newCount = "$0" + newScoreInStr;
      } else {
        newCount = "$" + newScoreInStr;
      }

      return {
        ...state,
        gameScore: newCount,
      };
    }

    case "SET_GAME_OVER": {
      return {
        ...state,
        gameOver: action.payload,
      };
    }

    default:
      return state;
  }
};

export default environment;
