import {
  setStarsCount,
  setPlatformCount,
  setGameScore,
  setGameIsStarts,
  setGameOver,
} from "../redux/actions/environment";
import {
  setOnPlatform,
  setDogePosition,
  setJumpCount,
} from "../redux/actions/doge";
import { setCoinsCount } from "../redux/actions/coins";

// --- Собака прыгает
export const onJump = (
  dispatch,
  dogeElem,
  gameIsStarts,
  startsBackgroundMusic,
  jumpCount
) => {
  if (gameIsStarts === false) {
    dispatch(setGameIsStarts());
    startsBackgroundMusic();
  }

  if (jumpCount <= 1) {
    dispatch(setDogePosition([getComputedStyle(dogeElem).bottom, 400, 1]));
    dispatch(setOnPlatform(false));
    setTimeout(() => {
      dispatch(setDogePosition({}));
    }, 600);
    dispatch(setJumpCount(1));
  }
};

// --- Рендерим фоновые звезды
export const renderStars = (dispatch) => {
  for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
      dispatch(setStarsCount());
    }, i * 1000);
  }
};

// --- Рендер стартовых платформ
export const newPlatformGen = (dispatch) => {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      dispatch(setPlatformCount(i));
    }, (i + 1) * 3000);
  }
};

// --- Через 3 сек после старта, двигаем платформы
export const movePlatforms = (dispatch) => {
  setInterval(() => {
    newPlatformGen(dispatch, setPlatformCount);
  }, 3000);
};

// --- Генерация новых монет в начале игры
export const startCoins = (dispatch) => {
  for (let i = 0; i <= 4; i++) {
    setTimeout(() => {
      dispatch(setCoinsCount([]));
    }, 400 * i);
  }
};

// --- Проверяем контакт с платформой
export const checkOnPlatform = (
  dogePosition,
  dogeElem,
  platformPosition,
  platformBorder,
  inJump,
  dispatch,
  onPlatformRef
) => {
  dogePosition = dogeElem.getBoundingClientRect();
  platformPosition = platformBorder.getBoundingClientRect();
  let doge = dogePosition;
  let platform = platformPosition;

  if (
    Object.keys(inJump).length === 0 &&
    platform.left <= doge.right &&
    (doge.right <= platform.right || doge.left <= platform.right) &&
    doge.bottom >= platform.top &&
    doge.bottom <= platform.top + 10
  ) {
    // --- Собака запрыгивает на платформу
    dispatch(setOnPlatform(true));
    dispatch(
      setDogePosition([getComputedStyle(platformBorder).bottom, 40, 0.1])
    );
    dispatch(setJumpCount(0));
  } else if (
    inJump.bottom === undefined &&
    doge.left < platform.right &&
    onPlatformRef === false &&
    platform.left <= doge.right &&
    doge.bottom >= platform.top &&
    doge.bottom <= platform.top + 30
  ) {
    // --- Переход с платформы на платформу без падения
    dispatch(
      setDogePosition([getComputedStyle(platformBorder).bottom, 40, 0.1])
    );
    dispatch(setOnPlatform(true));
    dispatch(setJumpCount(0));
  } else if (
    onPlatformRef === true &&
    inJump.bottom !== undefined &&
    doge.left > platform.right &&
    doge.bottom <= platform.bottom
  ) {
    // --- Собака падает с платформы
    dispatch(setDogePosition({}));
    dispatch(setOnPlatform(false));
    dispatch(setJumpCount(1));
  }
};

// --- Проверяем контакт с монетой
export const checkOnCoin = (
  dogePosition,
  dogeElem,
  coinPosition,
  coinBorder,
  dispatch,
  coinCollected,
  gameIsStarts,
  gameOver
) => {
  if (gameIsStarts === true) {
    dogePosition = dogeElem.getBoundingClientRect();
    coinPosition = coinBorder.getBoundingClientRect();
    let doge = dogePosition;
    let coin = coinPosition;

    if (gameOver === false && doge.top >= 900) {
      dispatch(setJumpCount(2));
      dispatch(setGameOver(true));
    } else if (
      doge.right >= coin.left &&
      (coin.bottom >= doge.bottom || coin.bottom + 145 >= doge.bottom) &&
      (coin.right >= doge.right || coin.right + 145 >= doge.right) &&
      coin.top <= doge.bottom
    ) {
      // --- Собака подбирает монету
      dispatch(setCoinsCount(coinBorder.id));
      dispatch(setGameScore(1000));
      setTimeout(() => {
        dispatch(setCoinsCount([]));
      }, 400);
      coinCollected();
    }
  }
};
