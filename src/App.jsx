import { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStarsCount, setPlatformCount } from "./redux/actions/environment";
import { setInJump, setOnPlatform } from "./redux/actions/doge";

import { Stars, Platform, Doge } from "./components";

function App() {
  const dispatch = useDispatch();
  const { starsCount, platformCount } = useSelector(
    ({ environment }) => environment
  );
  const { inJump, onPlatform } = useSelector(({ doge }) => doge);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    if (starsCount.length <= 2) {
      setTimeout(() => {
        dispatch(setStarsCount());
      }, 1000);
    }
  }, [dispatch, starsCount]);

  // Собака прыгает
  const onJump = useCallback(() => {
    dispatch(setInJump(true));
    dispatch(setOnPlatform({}));
    setTimeout(() => {
      dispatch(setInJump(false));
    }, 600);
  }, [dispatch]);

  let dogeRef = useRef();
  let dogePositionRef = useRef();
  let platformRef = useRef();
  let platformPositionRef = useRef();
  let inJumpRef = useRef();
  inJumpRef.current = inJump;
  let onPlatformRef = useRef();
  onPlatformRef.current = onPlatform;

  const checkOnPlatform = useCallback(
    (platformBorder) => {
      dogePositionRef.current = dogeRef.current.getBoundingClientRect();
      platformPositionRef.current = platformBorder.getBoundingClientRect();
      let doge = dogePositionRef.current;
      let platform = platformPositionRef.current;

      if (
        inJumpRef.current === false &&
        platform.left <= doge.right &&
        (doge.right <= platform.right || doge.left <= platform.right) &&
        doge.bottom >= platform.top &&
        doge.bottom <= platform.top + 10
      ) {
        // Собака запрыгнула
        dispatch(setInJump(true));
        let platformY = getComputedStyle(platformBorder).bottom;
        let px = +platformY.match(/\d+/)[0] + 40;
        // Положение собаки фиксируется на платформе
        dispatch(
          setOnPlatform({
            bottom: px + "px",
            transition: 0.1 + "s",
          })
        );
      }
      if (
        inJumpRef.current === true &&
        onPlatformRef.current.bottom !== undefined &&
        doge.left > platform.right &&
        doge.bottom <= platform.bottom
      ) {
        // Собака падает с платформы
        dispatch(setInJump(false));
        dispatch(setOnPlatform({}));
      }
    },
    [dispatch, dogePositionRef, platformPositionRef]
  );

  useEffect(() => {
    if (platformCount.length <= 2) {
      setTimeout(() => {
        dispatch(setPlatformCount());
      }, 1000);
    }
    platformRef.current = document.querySelectorAll(".platform");
    platformRef.current.forEach((item) =>
      setInterval(checkOnPlatform, 25, item)
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
