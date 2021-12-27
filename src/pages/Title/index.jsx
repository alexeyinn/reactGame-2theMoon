import { Link } from "react-router-dom";

import "./style.scss";

function Title() {
  return (
    <div className="title">
      <img className="titleLogo" src="img/coins/shiba.svg" alt="title logo" />
      <ul>
        <li>
          <a
            href="https://github.com/alexeyinn/reactGame-2theMoon"
            target="_blank"
            rel="noreferrer"
          >
            <img src="img/github.svg" alt="github logo" />
          </a>
        </li>

        <li>
          <Link to="/game">
            <img src="img/toTheMoon.jpg" alt="to the moon logo" />
          </Link>
        </li>

        <li>
          <a href="https://t.me/alexeyinn" target="_blank" rel="noreferrer">
            <img src="img/telegram.svg" alt="telegram logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Title;
