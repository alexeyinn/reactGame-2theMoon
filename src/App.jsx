import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import useSound from "use-sound";

import { Stars, Menu } from "./components";
import { Title, Game } from "./pages/index";

import { setSoundIsEnable } from "./redux/actions/environment";

import { renderStars } from "./utils/formulas";

import shibaInu from "../src/assets/sounds/shibaInu.mp3";

const authBtnTitle = ["Войти", "Регистрация", "Гость"];
const authBtnTitleLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "/game",
];

function App() {
  const dispatch = useDispatch();
  const { musicVolumeLvl } = useSelector(({ environment }) => environment);
  const { starsCount } = useSelector(({ environment }) => environment);

  const [shibaInuPlay] = useSound(shibaInu, {
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
          path=""
          exact
          element={<Title startMusic={startBackgroundMusic} />}
        />
        <Route
          path="/auth"
          exact
          element={
            <Menu btnTitle={authBtnTitle} btnLinks={authBtnTitleLinks} />
          }
        />
        <Route path="/game" exact element={<Game />} />
      </Routes>
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
