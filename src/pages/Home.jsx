import { memo } from "react";
// react-router-dom!
import { Link } from "react-router-dom";
// css!
import css from "./Home.module.css";
// detail!
import { ghibliMovies } from "../movies/ghibliMovies";
const Home = () => {
  return (
    <>
      <div className={css.container}>
        {ghibliMovies.map((detail) => {
          return (
            <div key={detail.id} className={css.boxes}>
              <div className={css.imgcontainer}>
                <Link to={`/detail/${detail.id}`}>
                  <img
                    className={css.imgs}
                    src={detail.image}
                    alt={detail.title}
                  />
                </Link>
              </div>
              <h4 className={css.titles}>{detail.title}</h4>
              <p className={css.years}>{detail.year}</p>
            </div>
          );
        })}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default memo(Home);
