import { memo } from "react";
// css!
import "./Sidebar.css";
// react-router-dom!
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <ul>
        <Link className="normal" to={"/"}>
          <li>Home</li>
        </Link>
        <Link className="normal" to={"/genres"}>
          <li>Genres</li>
        </Link>
        <Link className="normal" to={"/favorites"}>
          <li>Favorites</li>
        </Link>
        <Link className="normal" to={"/characters"}>
          <li>Characters</li>
        </Link>
        <Link className="normal" to={"/quiz"}>
          <li>Quiz</li>
        </Link>
        <Link className="normal" to={"/music"}>
          <li>Ghibli Music</li>
        </Link>
        <Link className="normal" to={"/setting"}>
          <li>⚙ Settings</li>
        </Link>
      </ul>
    </div>
  );
};

export default memo(Sidebar);
