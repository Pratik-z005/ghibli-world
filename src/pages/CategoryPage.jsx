import { memo } from "react";
import { useParams, Link } from "react-router-dom";
// data!
import { ghibliMovies } from "../movies/ghibliMovies";
// css!
import css from "./Category.module.css";

const CategoryPage = () => {
  const { category } = useParams();

  const filteredMovies = ghibliMovies.filter((movie) =>
    movie.categories?.includes(category),
  );
  return (
    <>
      <h2 className={css.categoryClass}>{category} Movies</h2>
      <div className={css.container}>
        {filteredMovies.map((movie) => {
          return (
            <div key={movie.id} className={css.boxes}>
              <div className={css.imgcontainer}>
                <Link to={`/detail/${movie.id}`}>
                  <img
                    className={css.imgs}
                    src={movie.image}
                    alt={movie.title}
                  />
                </Link>
              </div>
              <h4 className={css.titles}>{movie.title}</h4>
              <p className={css.years}>{movie.year}</p>
              {/* <Link to={`/detail/${movie.id}`}>
                <button className={css.viewMore}>View Details</button>
              </Link> */}
            </div>
          );
        })}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};
export default memo(CategoryPage);
