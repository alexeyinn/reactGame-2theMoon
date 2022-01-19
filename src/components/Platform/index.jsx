import "./style.scss";

function Platform(props) {
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
}

export default Platform;
