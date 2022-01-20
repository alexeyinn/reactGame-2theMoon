import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSteps } from "../../redux/actions/doge";

import "./style.scss";
import dogeStepAvatar from "../../assets/img/doge/step.svg";
import dogeByStepAvatar from "../../assets/img/doge/byStep.svg";
import dogeInJumpAvatar from "../../assets/img/doge/jump.svg";

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
      src={
        onPlatform
          ? steps
            ? dogeStepAvatar
            : dogeByStepAvatar
          : dogeInJumpAvatar
      }
      alt="doge"
    />
  );
}

export default Doge;
