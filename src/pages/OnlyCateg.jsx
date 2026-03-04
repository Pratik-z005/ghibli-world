import { memo } from "react";
import { Link } from "react-router-dom";
import css from "./Genres.module.css";

const OnlyCateg = () => {
  const allCategories = [
    "Fantasy",
    "Adventure",
    "Steampunk",
    "War",
    "Drama",
    "Historical",
    "Family",
    "Slice of Life",
    "Coming-of-Age",
    "Comedy",
    "Environmental",
    "Romance",
    "Action",
    "Supernatural",
    "Biography",
    "Folklore",
    "Mystery",
    "Psychological",
  ];

  return (
    <>
      <div className={css.categoryContainer}>
        {allCategories.map((category, idx) => (
          <div key={idx} className={css.genreBtn}>
            <Link to={`/genres/${category}`}>
              <button className={css.genres}>{category}</button>
            </Link>
          </div>
        ))}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default memo(OnlyCateg);
