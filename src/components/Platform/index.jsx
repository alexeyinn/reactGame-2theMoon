import React from "react";

import "./style.scss";

const Platform = React.memo(function Platform(props) {
  let platformStyle = {
    top: props.position + "vh",
  };

  return (
    <img
      style={platformStyle}
      className="platform flying"
      src="/img/platform.svg"
      alt="platform"
    />
  );
});

export default Platform;
