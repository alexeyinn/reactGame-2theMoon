import React from "react";

import "./style.scss";
import btcCoin from "../../assets/img/coins/btc.svg";
import ethCoin from "../../assets/img/coins/eth.svg";
import shibaCoin from "../../assets/img/coins/shiba.svg";

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

  const coinsType = [btcCoin, ethCoin, shibaCoin];

  return (
    <img
      id={props.id}
      className="coin flying"
      style={coinStyle}
      src={coinsType[getRandomInt()]}
      alt="coin"
    />
  );
});

export default Coin;
