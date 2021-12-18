const initialState = {
  onPlatform: false,
  dogePosition: {},
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

    default:
      return state;
  }
};

export default doge;
