import React from "react";

import "./style.scss";

const Stars = React.memo((props) => {
  let starsStyle = {
    top: props.position + "vh",
  };

  return (
    <img
      style={starsStyle}
      className="stars flying"
      src="img/stars.svg"
      alt="stars"
    />
  );
});

export default Stars;
