export const setInput = (inputData) => ({
  type: "SET_INPUT",
  payload: inputData,
});

export const setUserData = (userDataFromBack) => ({
  type: "SET_USER_DATA",
  payload: userDataFromBack,
});
