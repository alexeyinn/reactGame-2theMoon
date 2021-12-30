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

  if (userData.id !== null) {
    if (recentScore > userData.hiScore) {
      dispatch(
        setUserData({
          userName: userData.userName,
          hiScore: recentScore,
          id: userData.id,
        })
      );
      axios.put(
        "https://61cb6604194ffe0017788d3a.mockapi.io/users/" + userData.id,
        {
          hiScore: recentScore,
        }
      );
    }
  } else {
    if (recentScore > userData.hiScore)
      dispatch(
        setUserData({
          userName: "Гость",
          hiScore: recentScore,
          id: null,
        })
      );
  }
  console.log("render");

  return (
    <ul className="finalBlock">
      <li>Игра окончена!</li>
      <li>Сыграть еще?</li>
      <ul className="finalBtn">
        <li onClick={() => window.location.reload()}>Да!</li>
        <li>
          {/* Ссылку ниже, не переделывать под роутинг!
          потащит все тяжелые формулы и проверки за собой
          и игра упадет */}
          <a href="/menu">В меню!</a>
        </li>
      </ul>
    </ul>
  );
}

export default Final;
