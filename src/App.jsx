import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setStarsCount,
  setPlatformCount,
  setCoinsCount,
} from "./redux/actions/environment";
import { setOnPlatform, setDogePosition } from "./redux/actions/doge";

import { Stars, Platform, Doge, Coin } from "./components";

import {
  onJump,
  newPlatformGen,
  checkOnPlatform,
  checkOnCoin,
} from "./utils/formulas";

function App() {
  const dispatch = useDispatch();
  const { starsCount, platformCount, coinsCount } = useSelector(
    ({ environment }) => environment
  );
  const { onPlatform, dogePosition } = useSelector(({ doge }) => doge);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    if (starsCount.length <= 3) {
      setTimeout(() => {
        dispatch(setStarsCount());
      }, 1000);
    }
    setInterval(() => {
      newPlatformGen(dispatch, setPlatformCount);
    }, 18000);
  }, [dispatch, starsCount]);

  let dogeRef = useRef();
  let dogePositionRef = useRef();
  let platformRef = useRef();
  let platformPositionRef = useRef();
  let inJump = useRef();
  inJump.current = dogePosition;
  let onPlatformRef = useRef();
  onPlatformRef.current = onPlatform;
  let coinRef = useRef();
  let coinPositionRef = useRef();

  useEffect(() => {
    if (platformCount.length <= 5) {
      setTimeout(() => {
        dispatch(setPlatformCount([]));
      }, 500);
    }
    platformRef.current = document.querySelectorAll(".platform");
    platformRef.current.forEach((item) =>
      setInterval(
        () =>
          checkOnPlatform(
            dogePositionRef,
            dogeRef,
            platformPositionRef,
            item,
            inJump,
            setOnPlatform,
            dispatch,
            setDogePosition,
            onPlatformRef
          ),
        10
      )
    );
  }, [dispatch, platformCount, platformRef]);

  useEffect(() => {
    if (coinsCount.length <= 28) {
      setTimeout(() => {
        dispatch(setCoinsCount([]));
      }, 100);
    }
    coinRef.current = document.querySelectorAll(".coin");
    coinRef.current.forEach((item) =>
      setInterval(
        () => checkOnCoin(dogePositionRef, dogeRef, coinPositionRef, item),
        700
      )
    );
  }, [dispatch, coinsCount, dogePosition]);

  return (
    <div
      onClick={() => onJump(dispatch, setDogePosition, dogeRef, setOnPlatform)}
      className="App"
    >
      <Doge />
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      {platformCount.map((item, index) => (
        <Platform position={item} key={index} />
      ))}
      {coinsCount.map((item, index) => (
        <Coin key={index} position={item} />
      ))}
    </div>
  );
}

export default App;
