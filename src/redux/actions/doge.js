export const setInJump = (doingJump) => ({
  type: "SET_IN_JUMP",
  payload: doingJump,
});

export const setOnPlatform = (floorPosition) => ({
  type: "SET_ON_PLATFORM",
  payload: floorPosition,
});
