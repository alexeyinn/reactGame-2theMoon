import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setUserData } from "../../redux/actions/user";

import "./style.scss";

function LeaderBoard() {
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
          <tr>
            <td>1</td>
            <td>name</td>
            <td>50000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>name2</td>
            <td>45000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>name3</td>
            <td>40000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>name4</td>
            <td>35000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>name5</td>
            <td>30000</td>
          </tr>
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
