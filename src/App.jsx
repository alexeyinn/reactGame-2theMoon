import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import useSound from "use-sound";

import { Stars } from "./components";
import Game from "./pages/Game";

import { setSoundIsEnable } from "./redux/actions/environment";

import { renderStars } from "./utils/formulas";

import shibaInu from "../src/assets/sounds/shibaInu.mp3";

function App() {
  const dispatch = useDispatch();
  const { musicVolumeLvl } = useSelector(({ environment }) => environment);
  const { starsCount } = useSelector(({ environment }) => environment);

  const [shibaInuPlay] = useSound(shibaInu, {
    volume: musicVolumeLvl,
  });

  useEffect(() => {
    renderStars(dispatch);
  }, [dispatch]);

  const startBackgroundMusic = () => {
    shibaInuPlay();
    setInterval(shibaInuPlay, 31000);
  };

  return (
    <div className="App">
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Routes>
        <Route path="/game" exact element={<Game />} />
      </Routes>
      <Link to="/game">
        <button>Играть</button>
      </Link>
      <img
        onClick={() => dispatch(setSoundIsEnable())}
        className="sound"
        src={`img/music${musicVolumeLvl ? "" : "Off"}.svg`}
        alt="sound"
      />
    </div>
  );
}

export default App;
