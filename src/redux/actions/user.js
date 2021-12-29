export const setInput = (inputData) => ({
  type: "SET_INPUT",
  payload: inputData,
});

export const setUserName = (name) => ({
  type: "SET_USER_NAME",
  payload: name,
});

export const setHiScore = (score) => ({
  type: "SET_HI_SCORE",
  payload: score,
});
