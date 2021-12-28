import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Stars } from "./components";
import { Title, Auth, Game } from "./pages/index";

import { setSoundIsEnable } from "./redux/actions/environment";

import { renderStars } from "./utils/formulas";

function App() {
  const dispatch = useDispatch();
  const { musicVolumeLvl } = useSelector(({ environment }) => environment);
  const { starsCount } = useSelector(({ environment }) => environment);

  useEffect(() => {
    renderStars(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      {starsCount.map((item, index) => (
        <Stars position={item} key={index} />
      ))}
      <Routes>
        <Route path="" exact element={<Title />} />
        <Route path="/auth" exact element={<Auth />} />
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
