import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useSound from "use-sound";

import { Stars } from "./components";
import { Title, Game, Auth, Menu, PreGame } from "./pages/index";

import { setSoundIsEnable } from "./redux/actions/environment";

import { renderStars } from "./utils/formulas";

import musicOnIco from "./assets/img/musicIco/musicOn.svg";
import musicOffIco from "./assets/img/musicIco/musicOff.svg";
import shibaInu from "../src/assets/sounds/shibaInu.mp3";

function App() {
  const dispatch = useDispatch();
  const { musicVolumeLvl } = useSelector(({ environment }) => environment);
  const { starsCount } = useSelector(({ environment }) => environment);

  const [shibaInuPlay, { stop }] = useSound(shibaInu, {
    volume: musicVolumeLvl,
  });

  const startBackgroundMusic = () => {
    shibaInuPlay();
    setInterval(shibaInuPlay, 31000);
  };

  useEffect(() => {
    renderStars(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Routes>
        <Route
          path="/"
          exact
          element={<Title startMusic={startBackgroundMusic} />}
        />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/pregame/*" element={<PreGame />} />
        <Route path="/game" element={<Game stopMusic={stop} />} />
      </Routes>
      <img
        onClick={() => dispatch(setSoundIsEnable())}
        className="sound"
        src={musicVolumeLvl ? musicOnIco : musicOffIco}
        alt="sound"
      />
    </div>
  );
}

export default App;
