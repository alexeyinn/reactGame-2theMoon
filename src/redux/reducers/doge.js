const initialState = {
  inJump: false,
  isFalling: true,
  onPlatform: {},
};

const doge = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IN_JUMP": {
      return {
        ...state,
        inJump: action.payload,
      };
    }
    case "SET_IS_FALLING": {
      return {
        ...state,
        isFalling: action.payload,
      };
    }
    case "SET_ON_PLATFORM": {
      return {
        ...state,
        onPlatform: action.payload,
      };
    }
    default:
      return state;
  }
};

export default doge;
