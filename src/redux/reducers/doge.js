const initialState = {
  onPlatform: false,
  dogePosition: {},
  jumpCount: 0,
};

const doge = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ON_PLATFORM": {
      return {
        ...state,
        onPlatform: action.payload,
      };
    }

    case "SET_DOGE_POSITION": {
      let newDogePosition = {};

      if (Array.isArray(action.payload)) {
        let dogeY = action.payload[0];
        // RegExp для получения числа из строки с текстом
        let px = +dogeY.match(/\d+/)[0] + action.payload[1];
        newDogePosition = {
          bottom: px + "px",
          transition: action.payload[2] + "s",
        };
      }

      return {
        ...state,
        dogePosition: newDogePosition,
      };
    }

    case "SET_JUMP_COUNT": {
      return {
        ...state,
        jumpCount: action.payload === 0 ? 0 : state.jumpCount + action.payload,
      };
    }

    default:
      return state;
  }
};

export default doge;
