// --- Собака прыгает
export const onJump = (dispatch, setDogePosition, dogeElem, setOnPlatform) => {
  dispatch(
    setDogePosition([getComputedStyle(dogeElem.current).bottom, 400, 1])
  );
  dispatch(setOnPlatform(false));
  setTimeout(() => {
    dispatch(setDogePosition({}));
  }, 600);
};

// --- Проверяем контакт с платформой
export const checkOnPlatform = (
  dogePosition,
  dogeElem,
  platformPosition,
  platformBorder,
  inJump,
  setOnPlatform,
  dispatch,
  setDogePosition,
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
    // можно добавить в условия новый флаг inJump etc
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
