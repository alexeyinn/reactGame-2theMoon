import React from "react";

import "./style.scss";

const Coin = React.memo(function Coin(props) {
  let coinStyle;

  if (props.position === undefined) {
    coinStyle = {
      display: "none",
    };
  } else {
    coinStyle = {
      top: props.position * 5 + "vh",
    };
  }

  const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
  };

  const coinsType = ["btc", "eth", "shiba"];

  return (
    <img
      id={props.id}
      className="coin flying"
      style={coinStyle}
      src={`img/coins/${coinsType[getRandomInt()]}.svg`}
      alt="coin"
    />
  );
});

export default Coin;
