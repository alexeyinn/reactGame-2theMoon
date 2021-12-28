import { Link } from "react-router-dom";

import "./style.scss";

function Menu(props) {
  return (
    <div className="menuBlock">
      <ul>
        {props.btnTitle.map((item, index) => (
          <li key={index}>
            <Link to={props.btnLinks[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
