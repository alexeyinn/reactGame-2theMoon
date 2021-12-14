import { useState } from "react";

function App() {
  const [inJump, setInJump] = useState(false);

  const fromJump = () => {
    setInJump(false);
  };

  const onJump = () => {
    setInJump(true);
    setTimeout(fromJump, 700);
  };

  return (
    <div onClick={onJump} className="App">
      <img
        className={"doge" + (inJump ? " jump" : "")}
        src="img/doge.svg"
        alt="doge"
      />
      <img className="stars flying" src="img/stars.svg" alt="stars" />
      <img className="platform flying" src="img/platform.svg" alt="platform" />
    </div>
  );
}

export default App;
