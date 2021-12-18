import { useSelector } from "react-redux";

import "./style.scss";

function Doge() {
  const { onPlatform, dogeToUp } = useSelector(({ doge }) => doge);
  return (
    <img
      style={Object.keys(dogeToUp).length !== 0 ? dogeToUp : onPlatform}
      className={"doge"}
      src="img/doge.svg"
      alt="doge"
    />
  );
}

export default Doge;
