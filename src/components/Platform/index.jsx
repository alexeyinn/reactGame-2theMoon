import React from "react";

import "./style.scss";
import platformImg from "../../assets/img/platform.svg";

const Platform = React.memo(function Platform(props) {
  let platformStyle = {
    top: props.position + "vh",
  };

  return (
    <img
      style={platformStyle}
      className="platform flying"
      src={platformImg}
      alt="platform"
    />
  );
});

export default Platform;
