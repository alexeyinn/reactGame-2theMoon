import "./style.scss";

function Coin(props) {
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

  return (
    <img
      id={props.id}
      className="coin flying"
      style={coinStyle}
      src="img/coins/btc.svg"
      alt="coin"
    />
  );
}

export default Coin;
