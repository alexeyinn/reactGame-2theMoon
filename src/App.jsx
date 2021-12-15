import { useState, useRef, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inJump, setInJump] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const [onPlatform, setOnPlatform] = useState({});

  const fromJump = () => {
    setInJump(false);
    setIsFalling(true);
  };

  const onJump = () => {
    setInJump(true);
    setTimeout(fromJump, 700);
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
      let platformY = getComputedStyle(platformElem.current).bottom;
      let px = +platformY.match(/\d+/)[0] + 40;

      setOnPlatform({
        bottom: px + "px",
        transition: 0.1 + "s",
      });
      setIsFalling(false);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
    dogeElem.current = document.querySelector(".doge");
    platformElem.current = document.querySelector(".platform");
    console.log(getComputedStyle(dogeElem.current).bottom);
  }, []);

  if (isLoaded === true) {
    setInterval(checkOnPlatform, 1);
  }

  return (
    <div onClick={onJump} className="App">
      <img
        ref={dogeElem}
        style={onPlatform}
        className={"doge" + (inJump ? " jump" : "")}
        src="img/doge.svg"
        alt="doge"
      />
      <img className="stars flying" src="img/stars.svg" alt="stars" />
      <img
        ref={platformElem}
        className="platform flying"
        src="img/platform.svg"
        alt="platform"
      />
    </div>
  );
}

export default App;
