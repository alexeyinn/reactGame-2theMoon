import { useSelector } from "react-redux";

import "./style.scss";

function Doge() {
  const { dogePosition } = useSelector(({ doge }) => doge);
  const { gameIsStarts } = useSelector(({ environment }) => environment);

  const startPositionStyle = {
    bottom: 80 + "vh",
  };

  return (
    <img
      style={gameIsStarts ? dogePosition : startPositionStyle}
      className={"doge"}
      src="img/doge.svg"
      alt="doge"
    />
  );
}

export default Doge;
