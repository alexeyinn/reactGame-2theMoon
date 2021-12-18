import { useSelector } from "react-redux";

import "./style.scss";

function Doge() {
  const { dogePosition } = useSelector(({ doge }) => doge);
  return (
    <img
      style={dogePosition}
      className={"doge"}
      src="img/doge.svg"
      alt="doge"
    />
  );
}

export default Doge;
