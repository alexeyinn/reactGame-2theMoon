import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsLoaded, setStarsCount } from "./redux/actions/environment";
import { setInJump, setIsFalling, setOnPlatform } from "./redux/actions/doge";

import { Stars, Platform, Doge } from "./components";

function App() {
  const dispatch = useDispatch();
  const { isLoaded, starsCount } = useSelector(
    ({ environment }) => environment
  );
  const { isFalling } = useSelector(({ doge }) => doge);

  useEffect(() => {
    if (starsCount.length <= 2) {
      setTimeout(() => {
        dispatch(setStarsCount());
      }, 1000);
    }
  }, [dispatch, starsCount]);

  const onJump = () => {
    dispatch(setInJump(true));
    setTimeout(() => {
      dispatch(setInJump(false));
      dispatch(setIsFalling(true));
    }, 600);
  };

  let dogeElem = useRef();
  let dogePosition;
  let platformElem = useRef();
  let platformPosition;

  const checkOnPlatform = () => {
    dogePosition = dogeElem.current.getBoundingClientRect();
    platformPosition = platformElem.current.getBoundingClientRect();
    if (
      isFalling === true &&
      platformPosition.left <= dogePosition.right &&
      dogePosition.right <= platformPosition.right &&
      dogePosition.bottom >= platformPosition.top &&
      dogePosition.bottom <= platformPosition.top + 10
    ) {
      dispatch(setIsFalling(false));
      let platformY = getComputedStyle(platformElem.current).bottom;
      let px = +platformY.match(/\d+/)[0] + 40;

      dispatch(
        setOnPlatform({
          bottom: px + "px",
          transition: 0.1 + "s",
        })
      );
    }
    // Собака падает с платформы
    if (
      isFalling === false &&
      dogePosition.left > platformPosition.right &&
      dogePosition.bottom >= platformPosition.top &&
      dogePosition.bottom <= platformPosition.top + 20
    ) {
      dispatch(setIsFalling(true));
      dispatch(setOnPlatform({}));
    }
  };

  useEffect(() => {
    dispatch(setIsLoaded());
    dogeElem.current = document.querySelector(".doge");
    platformElem.current = document.querySelector(".platform");
  }, [dispatch]);

  if (isLoaded === true) {
    setInterval(checkOnPlatform, 70);
  }

  return (
    <div onClick={onJump} className="App">
      <Doge ref={dogeElem} />
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Platform ref={platformElem} />
    </div>
  );
}

export default App;
