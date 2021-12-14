import { useState } from "react";

function App() {
  const [inJump, setInJump] = useState(false);

  const fromJump = () => {
    setInJump(false);
  };

  const onJump = () => {
    setInJump(true);
    setTimeout(fromJump, 800);
  };

  return (
    <div onClick={onJump} className="App">
      <img
        className={"doge" + (inJump ? " jump" : "")}
        src="img/doge.svg"
        alt="doge"
      />
      <img className="stars" src="img/stars.svg" alt="stars" />
    </div>
  );
}

export default App;
