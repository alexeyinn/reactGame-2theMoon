const initialState = {
  inputData: "",
  userName: "Гость",
  hiScore: 0,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT": {
      return {
        ...state,
        inputData: action.payload,
      };
    }

    case "SET_USER_NAME": {
      return {
        ...state,
        userName: action.payload,
      };
    }

    case "SET_HI_SCORE": {
      return {
        ...state,
        hiScore: action.payload,
      };
    }

    default:
      return state;
  }
};

export default user;
