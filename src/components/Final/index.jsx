import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { setUserData } from "../../redux/actions/user";

function Final() {
  const dispatch = useDispatch();
  const { userData } = useSelector(({ user }) => user);
  const { gameScore } = useSelector(({ environment }) => environment);
  const recentScore = +gameScore.match(/\d+/);
  const newUserData = {
    userName: userData.userName,
    hiScore: recentScore,
    id: userData.id,
  };
  const guestUserData = {
    userName: "Гость",
    hiScore: recentScore,
    id: null,
  };

  if (userData.id !== null && recentScore > userData.hiScore) {
    dispatch(setUserData(newUserData));
    sessionStorage.setItem("user", JSON.stringify(newUserData));
    axios.put(
      "https://61cb6604194ffe0017788d3a.mockapi.io/users/" + userData.id,
      {
        hiScore: recentScore,
      }
    );
  } else if (recentScore > userData.hiScore) {
    dispatch(setUserData(guestUserData));
    sessionStorage.setItem("user", JSON.stringify(guestUserData));
  }

  return (
    <ul className="finalBlock">
      <p>Игра окончена!</p>
      <p>Сыграть еще?</p>
      <ul className="finalBtn">
        <li onClick={() => window.location.reload()}>Да!</li>
        {/* Ссылку ниже, не переделывать под роутинг!
          потащит все тяжелые формулы и проверки за собой
          и игра упадет */}
        <a href="/menu">
          <li>В меню!</li>
        </a>
      </ul>
    </ul>
  );
}

export default Final;
