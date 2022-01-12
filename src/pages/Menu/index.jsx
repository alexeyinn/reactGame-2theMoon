import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setUserData } from "../../redux/actions/user";

import "./style.scss";

function Menu() {
  const dispatch = useDispatch();
  const { userData } = useSelector(({ user }) => user);
  const savedUser = sessionStorage.user;

  useEffect(() => {
    if (userData.id === null && savedUser !== undefined) {
      dispatch(setUserData(JSON.parse(savedUser)));
    }
  });

  return (
    <>
      <div className="menuBlock">
        <ul className="menuButtons">
          <Link to="/game">
            <li>Начать!</li>
          </Link>
          <Link to="/leader-board">
            <li>ТОП-5 игроков</li>
          </Link>
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
