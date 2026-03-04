import { memo } from "react";
// css!
import css from "./Header.module.css";
// lucide-react!
import { TextAlignJustify, Search } from "lucide-react";
// react-router-dom!
import { Link, useNavigate } from "react-router-dom";
// component!
import Sidebar from "./Sidebar";
// Hook!
import { useState } from "react";
// data!
import { ghibliMovies } from "../movies/ghibliMovies";

import icon from "../assets/photos/icon-66.jpg";
import bgFinale from "../assets/photos/bg-finale.png";
import avatar from "../assets/photos/black-burries.jpg";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = search.trim().toLowerCase();
      // Check movie title!
      const movie = ghibliMovies.find((m) => m.title.toLowerCase() === query);
      if (movie) {
        navigate(`/detail/${movie.id}`);
        setSearch("");
        return;
      }

      // Check category!
      const categoryExists = ghibliMovies.some((m) =>
        m.categories.some((cat) => cat.toLowerCase() === query),
      );
      if (categoryExists) {
        navigate(`/category/${query}`);
        setSearch("");
        return;
      }
      // Not found!
      alert("Movie or Category not found!");
      setSearch("");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={css.topfixed}>
        <Link className={css.linkHome} to={"/"}>
          <div className={css.title}>
            MY
            <br />
            GHIBLI
            <br />
            WORLD
            <img
              className={css.icon}
              src={icon}
              height="50px"
              alt="S"
            />
          </div>
        </Link>

        <TextAlignJustify className={css.menuIcon} onClick={toggleMenu} />
        <Sidebar isOpen={isOpen} />

        <br />
        <div className={css.searchbox}>
          <Search className={css.searchIcon} />
          <input
            type="text"
            id={css.input}
            placeholder="Search Ghibli"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      <header>
        <div className={css.heroimagedesktop}>
          <img id={css.img} src={bgFinale} alt="" />
        </div>
      </header>

      {/* <footer>
        <p>© 2026 Created by Shujian</p>
      </footer> */}

      <Link to={"/chatbot"} className={css.avatarcontainer}>
        <div className={css.avatar}>
          <p className={css.avatarTxt}>Chat with Totoro...</p>
        </div>
        <img
          className={css.avatarImg}
          src={avatar}
          alt="totoro"
        />
      </Link>
    </>
  );
};

export default memo(Header);
