import axios from "axios";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLeaderBoardList } from "../../redux/actions/environment";

import "./style.scss";

function Top5() {
  const dispatch = useDispatch();
  const { leaderBoardList } = useSelector(({ environment }) => environment);

  useEffect(() => {
    const getUsersList = async () => {
      let { data } = await axios.get(
        "https://61cb6604194ffe0017788d3a.mockapi.io/users"
      );
      dispatch(setLeaderBoardList(data));
    };
    getUsersList();
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Позиция</th>
          <th>Имя игрока</th>
          <th>Рекорд</th>
        </tr>
      </thead>
      <tbody>
        {leaderBoardList.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.userName}</td>
            <td>{item.hiScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Top5;
