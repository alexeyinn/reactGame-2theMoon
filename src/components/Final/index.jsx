import "./style.scss";

function Final() {
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
