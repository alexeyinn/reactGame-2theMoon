import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setHiScore, setInput, setUserName } from "../../redux/actions/user";

import "./style.scss";

function Auth() {
  const dispatch = useDispatch();
  const { inputData } = useSelector(({ user }) => user);

  const onInput = (e) => {
    // RegExp для удаления пробелов
    dispatch(setInput(e.target.value.replace(/\s/g, "")));
  };

  const onAuth = async () => {
    try {
      if (inputData !== false) {
        let { data } = await axios.get(
          "https://61cb6604194ffe0017788d3a.mockapi.io/users"
        );
        let logInBefore = data.find((item) => item.userName === inputData);
        if (logInBefore === undefined) {
          axios.post("https://61cb6604194ffe0017788d3a.mockapi.io/users", {
            userName: inputData,
            hiScore: 0,
          });
          dispatch(setUserName(inputData));
        } else {
          dispatch(setUserName(inputData));
          dispatch(setHiScore(logInBefore.hiScore));
        }
      }
    } catch (error) {
      alert(
        "Не вышло получить данные с сервера! Вы можеье вернуться на страницу авторизации, для повторной попытки. Ошибка: " +
          error
      );
    }
  };

  return (
    <div className="authBlock">
      <ul>
        <input
          placeholder="Введите имя/ник"
          spellCheck="false"
          maxLength="10"
          onChange={onInput}
          value={inputData}
        ></input>
        <li>
          {inputData ? (
            <Link to="/menu" onClick={onAuth}>
              Играть как: {inputData}{" "}
            </Link>
          ) : (
            "...или..."
          )}
        </li>
        <li>
          <Link to="/menu">Войти как "Гость"</Link>
        </li>
      </ul>
    </div>
  );
}

export default Auth;
