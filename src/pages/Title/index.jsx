import { Link } from "react-router-dom";

import "./style.scss";
import gameLogo from "../../assets/img/coins/shiba.svg";
import githubLogo from "../../assets/img/github.svg";
import telegramLogo from "../../assets/img/telegram.svg";
import startBtn from "../../assets/img/toTheMoon.jpg";

function Title(props) {
  return (
    <div className="title">
      <img className="titleLogo" src={gameLogo} alt="title logo" />
      <ul>
        <a
          href="https://github.com/alexeyinn/reactGame-2theMoon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="github logo" />
        </a>
        <Link to="/auth">
          <img
            onClick={props.startMusic}
            src={startBtn}
            alt="to the moon logo"
          />
        </Link>
        <a href="https://t.me/alexeyinn" target="_blank" rel="noreferrer">
          <img src={telegramLogo} alt="telegram logo" />
        </a>
      </ul>
    </div>
  );
}

export default Title;
