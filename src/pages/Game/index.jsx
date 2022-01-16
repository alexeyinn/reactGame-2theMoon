import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";

import { setPlatformCount, setGameOver } from "../../redux/actions/environment";
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
import { setJumpCount } from "../../redux/actions/doge";

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

  useEffect(() => {
    if (platformCount.length <= 5) {
      setTimeout(() => {
        dispatch(setPlatformCount([]));
        // Строки ниже, поменять местами,
        // для замедления игры в полтора раза
        // }, 500);
      }, 325);
    }

    if (dogeRef.current.getBoundingClientRect().top >= 900) {
      dispatch(setJumpCount(2));
      dispatch(setGameOver(true));
    } else {
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
          5
        )
      );
    }
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
            coinCollected,
            gameIsStarts
          ),
        650
      )
    );
  }, [dispatch, coinsCount, dogePosition, coinCollected, gameIsStarts]);

  return (
    <div
      onClick={() =>
        onJump(
          dispatch,
          dogeRef,
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
