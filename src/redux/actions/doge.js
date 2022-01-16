export const setOnPlatform = (isLanding) => ({
  type: "SET_ON_PLATFORM",
  payload: isLanding,
});

export const setDogePosition = (param) => ({
  type: "SET_DOGE_POSITION",
  payload: param,
});

export const setJumpCount = (numberOfJump) => ({
  type: "SET_JUMP_COUNT",
  payload: numberOfJump,
});

export const setSteps = () => ({
  type: "SET_STEPS",
});
