import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import { Top5, HowToPlay } from "../../components";

import { setUserData } from "../../redux/actions/user";

import "./style.scss";

function PreGame() {
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
        <ul className="leaderBlockBtn">
          <Link to="/menu">
            <li>Назад</li>
          </Link>
          <Link to="/game">
            <li>Играть!</li>
          </Link>
        </ul>
        <Routes>
          <Route path="/top5" element={<Top5 />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
        </Routes>
      </div>
      <p className="menuUi userName">{userData.userName}</p>
      <p className="menuUi hiScore">
        Ваш лучший результат - {userData.hiScore}
      </p>
    </>
  );
}

export default PreGame;
