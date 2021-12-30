import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

function Menu() {
  const { userData } = useSelector(({ user }) => user);

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
      <p className="menuUi userName">{userData.userName}</p>
      <p className="menuUi hiScore">
        Ваш лучший результат - {userData.hiScore}
      </p>
    </>
  );
}

export default Menu;
