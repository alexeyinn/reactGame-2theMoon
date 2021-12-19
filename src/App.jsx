import { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStarsCount, setPlatformCount } from "./redux/actions/environment";
import { setOnPlatform, setDogePosition } from "./redux/actions/doge";

import { Stars, Platform, Doge } from "./components";

function App() {
  const dispatch = useDispatch();
  const { starsCount, platformCount } = useSelector(
    ({ environment }) => environment
  );
  const { onPlatform, dogePosition } = useSelector(({ doge }) => doge);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    if (starsCount.length <= 2) {
      setTimeout(() => {
        dispatch(setStarsCount());
      }, 1000);
    }
  }, [dispatch, starsCount]);

  // --- Собака прыгает
  const onJump = useCallback(() => {
    dispatch(
      setDogePosition([getComputedStyle(dogeRef.current).bottom, 400, 1])
    );
    dispatch(setOnPlatform(false));
    setTimeout(() => {
      dispatch(setDogePosition({}));
    }, 600);
  }, [dispatch]);

  let dogeRef = useRef();
  let dogePositionRef = useRef();
  let platformRef = useRef();
  let platformPositionRef = useRef();
  let dogepositionRef = useRef();
  dogepositionRef.current = dogePosition;
  let onPlatformRef = useRef();
  onPlatformRef.current = onPlatform;
  // --- Проверяем контакт с платформой
  const checkOnPlatform = useCallback(
    (platformBorder) => {
      dogePositionRef.current = dogeRef.current.getBoundingClientRect();
      platformPositionRef.current = platformBorder.getBoundingClientRect();
      let doge = dogePositionRef.current;
      let platform = platformPositionRef.current;

      if (
        Object.keys(dogepositionRef.current).length === 0 &&
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
        dogepositionRef.current.bottom === undefined &&
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
        dogepositionRef.current.bottom !== undefined &&
        doge.left > platform.right &&
        doge.bottom <= platform.bottom
      ) {
        // --- Собака падает с платформы
        dispatch(setDogePosition({}));
        dispatch(setOnPlatform(false));
      }
    },
    [dispatch, dogePositionRef, platformPositionRef]
  );

  useEffect(() => {
    if (platformCount.length <= 5) {
      setTimeout(() => {
        dispatch(setPlatformCount());
      }, 500);
    }
    platformRef.current = document.querySelectorAll(".platform");
    platformRef.current.forEach((item) =>
      setInterval(checkOnPlatform, 10, item)
    );
  }, [dispatch, platformCount, checkOnPlatform, platformRef]);

  return (
    <div onClick={onJump} className="App">
      <Doge />
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      {platformCount.map((item, index) => (
        <Platform position={item} key={index} />
      ))}
    </div>
  );
}

export default App;
