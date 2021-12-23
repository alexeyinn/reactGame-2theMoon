import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";

import { Stars } from "./components";
import Game from "./pages/Game";

import { renderStars } from "./utils/formulas";

function App() {
  const dispatch = useDispatch();

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
        <Route path="/game" exact element={<Game />} />
      </Routes>
      <Link to="/game">
        <button>Играть</button>
      </Link>
    </div>
  );
}

export default App;
