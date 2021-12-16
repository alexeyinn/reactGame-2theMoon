import { useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStarsCount } from "./redux/actions/environment";
import { setInJump, setOnPlatform } from "./redux/actions/doge";

import { Stars, Platform, Doge } from "./components";

function App() {
  const dispatch = useDispatch();
  const { starsCount } = useSelector(({ environment }) => environment);
  const { inJump } = useSelector(({ doge }) => doge);

  useEffect(() => {
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
  let toUp = useRef();
  toUp.current = inJump;

  const checkOnPlatform = useCallback(() => {
    dogePositionRef.current = dogeRef.current.getBoundingClientRect();
    platformPositionRef.current = platformRef.current.getBoundingClientRect();
    let doge = dogePositionRef.current;
    let platform = platformPositionRef.current;

    if (
      toUp.current === false &&
      platform.left <= doge.right &&
      doge.right <= platform.right &&
      doge.bottom >= platform.top &&
      doge.bottom <= platform.top + 10
    ) {
      // Собака запрыгнула
      dispatch(setInJump(true));
      let platformY = getComputedStyle(platformRef.current).bottom;
      let px = +platformY.match(/\d+/)[0] + 40;

      dispatch(
        setOnPlatform({
          bottom: px + "px",
          transition: 0.1 + "s",
        })
      );
    }
    if (
      toUp.current === true &&
      doge.left > platform.right &&
      doge.bottom >= platform.top
    ) {
      // Собака падает с платформы
      dispatch(setInJump(false));
      dispatch(setOnPlatform({}));
    }
  }, [dispatch, dogePositionRef, platformPositionRef]);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    platformRef.current = document.querySelector(".platform");
    setInterval(checkOnPlatform, 1);
  }, [checkOnPlatform]);

  return (
    <div onClick={onJump} className="App">
      <Doge />
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Platform />
    </div>
  );
}

export default App;
