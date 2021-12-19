import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setStarsCount, setPlatformCount } from "./redux/actions/environment";
import { setOnPlatform, setDogePosition } from "./redux/actions/doge";

import { Stars, Platform, Doge } from "./components";

import { onJump, checkOnPlatform } from "./utils/formulas";

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

  let dogeRef = useRef();
  let dogePositionRef = useRef();
  let platformRef = useRef();
  let platformPositionRef = useRef();
  let inJump = useRef();
  inJump.current = dogePosition;
  let onPlatformRef = useRef();
  onPlatformRef.current = onPlatform;

  useEffect(() => {
    if (platformCount.length <= 5) {
      setTimeout(() => {
        dispatch(setPlatformCount());
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
    </div>
  );
}

export default App;
