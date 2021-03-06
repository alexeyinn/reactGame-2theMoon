import React from "react";

import "./style.scss";
import starsImg from "../../assets/img/stars.svg";

const Stars = React.memo((props) => {
  let starsStyle = {
    top: props.position + "vh",
  };

  return (
    <img
      style={starsStyle}
      className="stars flying"
      src={starsImg}
      alt="stars"
    />
  );
});

export default Stars;
