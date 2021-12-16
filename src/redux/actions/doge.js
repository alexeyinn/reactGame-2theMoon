export const setInJump = (doingJump) => ({
  type: "SET_IN_JUMP",
  payload: doingJump,
});

export const setIsFalling = (startsFalling) => ({
  type: "SET_IS_FALLING",
  payload: startsFalling,
});

export const setOnPlatform = (floorPosition) => ({
  type: "SET_ON_PLATFORM",
  payload: floorPosition,
});
