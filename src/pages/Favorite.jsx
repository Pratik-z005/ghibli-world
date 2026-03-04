import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
// css!
import css from "./Favorite.module.css";

function Favorite() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <>
        <h2 className={css.favTitle}>No favorites added yet 🍃</h2>{" "}
        {/* <!-- filter is here ! --> */}
        <div className={css.filter}></div>
      </>
    );
  }
  return (
    <>
      <h1 className={css.favTitle}>My Favorite Ghibli Movies</h1>
      <div className={css.container}>
        {favorites.map((movie) => (
          <div key={movie.id} className={css.boxes}>
            <div className={css.imgcontainer}>
              <Link to={`/detail/${movie.id}`}>
                <img className={css.imgs} src={movie.image} alt={movie.title} />
              </Link>
            </div>
            <h4 className={css.titles}>{movie.title}</h4>
            <button
              className={css.removeFav}
              onClick={() => removeFromFavorites(movie.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
}
export default Favorite;
