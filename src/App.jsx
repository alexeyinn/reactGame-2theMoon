import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStarsCount, setPlatformCount } from "./redux/actions/environment";
import { setOnPlatform, setDogePosition } from "./redux/actions/doge";
import { setCoinsCount } from "./redux/actions/coins";

import { Stars, Platform, Doge, Coin } from "./components";

import {
  onJump,
  startCoins,
  checkOnPlatform,
  checkOnCoin,
  movePlatforms,
  renderStars,
} from "./utils/formulas";

function App() {
  const dispatch = useDispatch();
  const { starsCount, platformCount } = useSelector(
    ({ environment }) => environment
  );
  const { onPlatform, dogePosition } = useSelector(({ doge }) => doge);
  const { coinsCount } = useSelector(({ coins }) => coins);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    renderStars(dispatch, setStarsCount);
    startCoins(dispatch, setCoinsCount);
    movePlatforms(dispatch, setPlatformCount);
  }, [dispatch]);

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
    coinRef.current = document.querySelectorAll(".coin");
    coinRef.current.forEach((item) =>
      setInterval(
        () =>
          checkOnCoin(
            dogePositionRef,
            dogeRef,
            coinPositionRef,
            item,
            dispatch,
            setCoinsCount
          ),
        650
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
        <Coin key={index} position={item} id={index} />
      ))}
    </div>
  );
}

export default App;
