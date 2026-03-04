import { memo, useContext } from "react";
// react-router-dom!
import { useParams, Link, useNavigate } from "react-router-dom";
// css!
import css from "./Detail.module.css";
// data!
import { ghibliMovies } from "../movies/ghibliMovies";
// lucide-react!
import { Heart } from "lucide-react";
// context!
import { FavoritesContext } from "../context/FavoritesContext";

const Detail = () => {
  const navigate = useNavigate();
  const { addToFavorites } = useContext(FavoritesContext);
  const { id } = useParams();

  const movie = ghibliMovies.find((movie) => movie.id === parseInt(id));
  return (
    <>
      <div className={css.details}>
        <div className={css.imgagetitle}>
          <img
            className={css.imgonly}
            src={movie.image}
            alt={movie.title}
            height="260px"
          />
          <div className={css.infocontainer}>
            <h3 className={css.titles}>{movie.title}</h3>
            <div className={css.btncontainer}>
              {movie.categories.map((category) => (
                <Link key={category} to={`/category/${category}`}>
                  <button className={css.btns}>{category}</button>
                </Link>
              ))}
            </div>
            <span className={css.director}>
              <span id={css.lined}>Directed by :</span> {movie.director}
            </span>
            <div className={css.blockDiv}>
              <button
                className={css.favBtn}
                onClick={() => {
                  addToFavorites(movie);
                  navigate("/favorites");
                }}
              >
                Add to Favorites
                <Heart className={css.heartIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className={css.description}>{movie.description}</div>
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default Detail;
