import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";

import { setPlatformCount } from "../../redux/actions/environment";
import { setUserData } from "../../redux/actions/user";

import { Platform, Doge, Coin, Final } from "../../components";

import {
  onJump,
  startCoins,
  checkOnPlatform,
  checkOnCoin,
  movePlatforms,
} from "../../utils/formulas";

import nyanDogStarts from "../../assets/sounds/nyanDogStarts.mp3";
import nyanDogMain from "../../assets/sounds/nyanDogMain.mp3";
import coinPick from "../../assets/sounds/coinPick.mp3";

import "./style.scss";

function Game(props) {
  const dispatch = useDispatch();
  const {
    platformCount,
    gameScore,
    soundVolumeLvl,
    musicVolumeLvl,
    gameIsStarts,
    gameOver,
  } = useSelector(({ environment }) => environment);
  const { onPlatform, dogePosition, jumpCount } = useSelector(
    ({ doge }) => doge
  );
  const { coinsCount } = useSelector(({ coins }) => coins);
  // --- Рендер основных элементов UI
  useEffect(() => {
    if (sessionStorage.user !== undefined) {
      dispatch(setUserData(JSON.parse(sessionStorage.user)));
    }
    dogeRef.current = document.querySelector(".doge");
    startCoins(dispatch);
    movePlatforms(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (platformCount.length <= 5) {
      setTimeout(() => {
        dispatch(setPlatformCount([]));
        // Строки ниже, поменять местами,
        // для замедления игры в полтора раза
        // }, 500);
      }, 325);
    }
  }, [dispatch, platformCount]);

  useEffect(() => {
    props.stopMusic();
  }, [props]);

  const [nyanDogBegin] = useSound(nyanDogStarts, {
    volume: musicVolumeLvl,
  });
  const [nyanDogConttinue] = useSound(nyanDogMain, {
    volume: musicVolumeLvl,
  });
  const [coinCollected] = useSound(coinPick, {
    volume: soundVolumeLvl,
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
  let gameOverRef = useRef();
  gameOverRef.current = gameOver;

  useEffect(() => {
    platformRef.current = document.querySelectorAll(".platform");
    platformRef.current.forEach((item) =>
      setInterval(
        () =>
          checkOnPlatform(
            dogePositionRef.current,
            dogeRef.current,
            platformPositionRef.current,
            item,
            inJump.current,
            dispatch,
            onPlatformRef.current
          ),
        20
      )
    );
  }, [dispatch, platformCount, platformRef]);

  useEffect(() => {
    coinRef.current = document.querySelectorAll(".coin");
    coinRef.current.forEach((item) =>
      setInterval(
        () =>
          checkOnCoin(
            dogePositionRef.current,
            dogeRef.current,
            coinPositionRef.current,
            item,
            dispatch,
            coinCollected,
            gameIsStarts,
            gameOverRef.current
          ),
        650
      )
    );
  }, [
    dispatch,
    coinsCount,
    dogePosition,
    coinCollected,
    gameIsStarts,
    gameOver,
  ]);

  return (
    <div
      onClick={() =>
        onJump(
          dispatch,
          dogeRef.current,
          gameIsStarts,
          startsBackgroundMusic,
          jumpCount
        )
      }
      className="game"
    >
      <Doge />
      {platformCount.map((item, index) => (
        <Platform position={item} key={index} />
      ))}
      {coinsCount.map((item, index) => (
        <Coin key={index} position={item} id={index} />
      ))}
      <p className="gameScore">{gameScore}</p>
      {gameOver ? <Final /> : null}
    </div>
  );
}

export default Game;
