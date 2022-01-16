import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSteps } from "../../redux/actions/doge";

import "./style.scss";

function Doge() {
  const dispatch = useDispatch();
  const { dogePosition, steps, onPlatform } = useSelector(({ doge }) => doge);
  const { gameIsStarts } = useSelector(({ environment }) => environment);

  useEffect(() => {
    setInterval(() => dispatch(setSteps()), 200);
  }, [dispatch]);

  const startPositionStyle = {
    bottom: 80 + "vh",
  };

  return (
    <img
      style={gameIsStarts ? dogePosition : startPositionStyle}
      className={"doge"}
      src={`img/doge/${onPlatform ? (steps ? `step` : `byStep`) : `jump`}.svg`}
      alt="doge"
    />
  );
}

export default Doge;
