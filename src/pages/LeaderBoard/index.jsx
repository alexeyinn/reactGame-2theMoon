import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setUserData } from "../../redux/actions/user";
import { setLeaderBoardList } from "../../redux/actions/environment";

import "./style.scss";

function LeaderBoard() {
  const dispatch = useDispatch();
  const { userData } = useSelector(({ user }) => user);
  const { leaderBoardList } = useSelector(({ environment }) => environment);
  const savedUser = sessionStorage.user;

  const getUsersList = async () => {
    let { data } = await axios.get(
      "https://61cb6604194ffe0017788d3a.mockapi.io/users"
    );
    dispatch(setLeaderBoardList(data));
  };

  useEffect(() => {
    if (userData.id === null && savedUser !== undefined) {
      dispatch(setUserData(JSON.parse(savedUser)));
    }
    if (leaderBoardList.length === 0) getUsersList();
  });

  return (
    <>
      <div className="menuBlock">
        <ul className="leaderBlockBtn">
          <li>
            <Link to="/menu">Назад</Link>
          </li>
          <li>
            <Link to="/game">Играть!</Link>
          </li>
        </ul>
        <table>
          <tr>
            <th>Позиция</th>
            <th>Имя игрока</th>
            <th>Рекорд</th>
          </tr>
          {leaderBoardList.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.userName}</td>
              <td>{item.hiScore}</td>
            </tr>
          ))}
        </table>
      </div>
      <p className="menuUi userName">{userData.userName}</p>
      <p className="menuUi hiScore">
        Ваш лучший результат - {userData.hiScore}
      </p>
    </>
  );
}

export default LeaderBoard;
