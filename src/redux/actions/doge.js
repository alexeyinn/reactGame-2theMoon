export const setInJump = () => ({
  type: "SET_IN_JUMP",
});

export const setIsFalling = () => ({
  type: "SET_IS_FALLING",
});

export const setOnPlatform = (floorPosition) => ({
  type: "SET_ON_PLATFORM",
  payload: floorPosition,
});
