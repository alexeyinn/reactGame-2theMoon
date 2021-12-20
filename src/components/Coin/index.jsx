import "./style.scss";

function Coin(props) {
  let coinStyle = {
    top: props.position * 5 + "vh",
  };
  return (
    <img
      className="coin flying"
      style={coinStyle}
      src="img/coins/btc.svg"
      alt="coin"
    />
  );
}

export default Coin;
