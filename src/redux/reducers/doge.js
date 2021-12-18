const initialState = {
  inJump: false,
  onPlatform: {},
  dogeToUp: {},
};

const doge = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IN_JUMP": {
      return {
        ...state,
        inJump: action.payload,
      };
    }
    case "SET_ON_PLATFORM": {
      return {
        ...state,
        onPlatform: action.payload,
      };
    }
    case "SET_DOGE_TO_UP": {
      let newDogePosition = {};
      console.log(typeof action.payload);
      if (typeof action.payload === "string") {
        let dogeY = action.payload;
        //match не найден
        let px = +dogeY.match(/\d+/)[0] + 300;
        newDogePosition = { bottom: px + "px", transition: 1 + "s" };
      }

      return {
        ...state,
        dogeToUp: newDogePosition,
      };
    }
    default:
      return state;
  }
};

export default doge;
