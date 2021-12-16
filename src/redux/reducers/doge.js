const initialState = {
  inJump: false,
  isFalling: false,
  onPlatform: {},
};

const doge = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IN_JUMP": {
      return {
        ...state,
        inJump: !state.inJump,
      };
    }
    case "SET_IS_FALLING": {
      return {
        ...state,
        isFalling: !state.isFalling,
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
