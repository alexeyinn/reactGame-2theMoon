import { useSelector } from "react-redux";

import "./style.scss";

function Doge() {
  const { inJump, onPlatform } = useSelector(({ doge }) => doge);
  return (
    <img
      style={onPlatform}
      className={"doge" + (inJump ? " jump" : "")}
      src="img/doge.svg"
      alt="doge"
    />
  );
}

export default Doge;
