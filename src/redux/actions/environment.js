export const setStarsCount = () => ({
  type: "SET_STARS_COUNT",
});

export const setPlatformCount = (platformToChange) => ({
  type: "SET_PLATFORM_COUNT",
  payload: platformToChange,
});
