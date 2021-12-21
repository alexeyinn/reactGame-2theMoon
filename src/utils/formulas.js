import {
  setStarsCount,
  setPlatformCount,
  setGameScore,
  setMusicIsStarts,
} from "../redux/actions/environment";
import { setOnPlatform, setDogePosition } from "../redux/actions/doge";
import { setCoinsCount } from "../redux/actions/coins";

// --- Собака прыгает
export const onJump = (
  dispatch,
  dogeElem,
  musicIsStarts,
  startsBackgroundMusic
) => {
  dispatch(
    setDogePosition([getComputedStyle(dogeElem.current).bottom, 400, 1])
  );
  dispatch(setOnPlatform(false));
  setTimeout(() => {
    dispatch(setDogePosition({}));
  }, 600);
  if (musicIsStarts === false) {
    dispatch(setMusicIsStarts());
    startsBackgroundMusic();
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

// --- Через 18 сек после старта, двигаем платформы
export const movePlatforms = (dispatch) => {
  setInterval(() => {
    newPlatformGen(dispatch, setPlatformCount);
  }, 18000);
};

// --- Генерация новых монет в начале игры
export const startCoins = (dispatch) => {
  for (let i = 0; i <= 7; i++) {
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
  dogePosition.current = dogeElem.current.getBoundingClientRect();
  platformPosition.current = platformBorder.getBoundingClientRect();
  let doge = dogePosition.current;
  let platform = platformPosition.current;

  if (
    Object.keys(inJump.current).length === 0 &&
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
  } else if (
    inJump.current.bottom === undefined &&
    doge.left < platform.right &&
    onPlatformRef.current === false &&
    platform.left <= doge.right &&
    doge.bottom >= platform.top &&
    doge.bottom <= platform.top + 30
  ) {
    // --- Переход с платформы на платформу без падения
    dispatch(
      setDogePosition([getComputedStyle(platformBorder).bottom, 40, 0.1])
    );
    dispatch(setOnPlatform(true));
  } else if (
    // Для оптимизации и уменьшения обращений к состоянию
    // при переходах с одной платформы - на другую,
    // можно попробовать добавить в условия новый флаг inJump etc
    onPlatformRef.current === true &&
    inJump.current.bottom !== undefined &&
    doge.left > platform.right &&
    doge.bottom <= platform.bottom
  ) {
    // --- Собака падает с платформы
    dispatch(setDogePosition({}));
    dispatch(setOnPlatform(false));
  }
};

// --- Проверяем контакт с монетой
export const checkOnCoin = (
  dogePosition,
  dogeElem,
  coinPosition,
  coinBorder,
  dispatch
) => {
  dogePosition.current = dogeElem.current.getBoundingClientRect();
  coinPosition.current = coinBorder.getBoundingClientRect();
  let doge = dogePosition.current;
  let coin = coinPosition.current;

  if (
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
  }
};
