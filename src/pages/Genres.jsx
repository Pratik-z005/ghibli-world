import { memo } from "react";
// react-router-dom!
import { Link, useParams } from "react-router-dom";
// css!
import css from "./Genres.module.css";
// data!
import { ghibliMovies } from "../movies/ghibliMovies.js";

const Genres = () => {
  const { category } = useParams();

  const filteredMovies = ghibliMovies.filter((movie) =>
    movie.categories.some(
      (cat) => cat.toLowerCase() === category.toLowerCase(),
    ),
  );
  return (
    <>
      <h2 className={css.categoryClass}>{category} Movies</h2>
      <div className={css.container}>
        {filteredMovies.length === 0 ? (
          <h3>No movies available</h3>
        ) : (
          filteredMovies.map((movie) => (
            <div
              className={css.card}
              key={movie.id}
              style={{ marginBottom: "20px" }}
            >
              <img className={css.imgs} src={movie.image} width="200" />
              <h4>{movie.title}</h4>
            </div>
          ))
        )}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default memo(Genres);
