import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

function Menu() {
  const { userName, hiScore } = useSelector(({ user }) => user);

  return (
    <>
      <div className="menuBlock">
        <ul>
          <li>
            <Link to="/game">Начать!</Link>
          </li>
          <li>Таблица лидеров</li>
          <li>Как играть?</li>
        </ul>
      </div>
      <p className="menuUi userName">{userName}</p>
      <p className="menuUi hiScore">Лучший результат - {hiScore}</p>
    </>
  );
}

export default Menu;
