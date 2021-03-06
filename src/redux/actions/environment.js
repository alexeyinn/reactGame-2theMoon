export const setStarsCount = () => ({
  type: "SET_STARS_COUNT",
});

export const setPlatformCount = (platformToChange) => ({
  type: "SET_PLATFORM_COUNT",
  payload: platformToChange,
});

export const setGameScore = (score) => ({
  type: "SET_GAME_SCORE",
  payload: score,
});

export const setGameIsStarts = () => ({
  type: "SET_GAME_IS_STARTS",
});

export const setSoundIsEnable = () => ({
  type: "SET_SOUND_IS_ENABLE",
});

export const setGameOver = (isFall) => ({
  type: "SET_GAME_OVER",
  payload: isFall,
});

export const setLeaderBoardList = (playersList) => ({
  type: "SET_LEADER_BOARD",
  payload: playersList,
});
