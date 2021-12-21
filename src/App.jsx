import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";

import {
  setPlatformCount,
  setSoundIsEnable,
} from "./redux/actions/environment";

import { Stars, Platform, Doge, Coin } from "./components";

import {
  onJump,
  startCoins,
  checkOnPlatform,
  checkOnCoin,
  movePlatforms,
  renderStars,
} from "./utils/formulas";

import nyanDogStarts from "./assets/sounds/nyanDogStarts.mp3";
import nyanDogMain from "./assets/sounds/nyanDogMain.mp3";

function App() {
  const dispatch = useDispatch();
  const { starsCount, platformCount, gameScore, musicIsStarts, soundIsEnable } =
    useSelector(({ environment }) => environment);
  const { onPlatform, dogePosition } = useSelector(({ doge }) => doge);
  const { coinsCount } = useSelector(({ coins }) => coins);

  useEffect(() => {
    dogeRef.current = document.querySelector(".doge");
    renderStars(dispatch);
    startCoins(dispatch);
    movePlatforms(dispatch);
  }, [dispatch]);

  const [nyanDogBegin] = useSound(nyanDogStarts, {
    volume: soundIsEnable,
  });
  const [nyanDogConttinue] = useSound(nyanDogMain, {
    volume: soundIsEnable,
  });

  const startsBackgroundMusic = () => {
    nyanDogBegin();
    setTimeout(nyanDogConttinue, 33500);
    setTimeout(() => {
      setInterval(nyanDogConttinue, 22000);
    }, 33500);
  };

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
            dispatch,
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
            dispatch
          ),
        650
      )
    );
  }, [dispatch, coinsCount, dogePosition]);

  return (
    <div
      onClick={() =>
        onJump(dispatch, dogeRef, musicIsStarts, startsBackgroundMusic)
      }
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
      <p>{gameScore}</p>
      <img
        onClick={() => dispatch(setSoundIsEnable())}
        className="sound"
        src={`img/music${soundIsEnable ? "" : "Off"}.svg`}
        alt="sound"
      />
    </div>
  );
}

export default App;
