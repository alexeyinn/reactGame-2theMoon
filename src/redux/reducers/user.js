const initialState = {
  inputData: "",
  userData: {
    userName: "Гость",
    hiScore: 0,
    id: null,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT": {
      return {
        ...state,
        inputData: action.payload,
      };
    }

    case "SET_USER_DATA": {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default user;
