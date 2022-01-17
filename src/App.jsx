import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useSound from "use-sound";

import { Stars } from "./components";
import { Title, Game, Auth, Menu, PreGame } from "./pages/index";

import { setSoundIsEnable } from "./redux/actions/environment";

import { renderStars } from "./utils/formulas";

import musicOn from "./assets/img/music.svg";
import musicOff from "./assets/img/musicOff.svg";
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
  //TODO
  // При возвращении в меню, включать музыку
  return (
    <div className="App">
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Routes>
        <Route
          path=""
          exact
          element={<Title startMusic={startBackgroundMusic} />}
        />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/pregame" element={<PreGame />}>
          <Route path="top5" />
          <Route path="howtoplay" />
        </Route>
        <Route path="/game" element={<Game stopMusic={stop} />} />
      </Routes>
      <img
        onClick={() => dispatch(setSoundIsEnable())}
        className="sound"
        src={musicVolumeLvl ? musicOn : musicOff}
        alt="sound"
      />
    </div>
  );
}

export default App;
