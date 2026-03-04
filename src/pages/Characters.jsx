import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { characters } from "../movies/characters";
import { Heart } from "lucide-react";

import css from "./Characters.module.css";

const Characters = () => {
  const { likedCharacters, toggleLike } = useContext(CharacterContext);

  return (
    <>
      <div className={css.container}>
        {characters.map((character) => {
          const isLiked = likedCharacters.some((c) => c.id === character.id);

          return (
            <div key={character.id} className={css.card}>
              <img
                className={css.imgs}
                src={character.image}
                alt={character.name}
              />
              <h3 className={css.chName}>{character.name}</h3>
              <p className={css.movie}>From: {character.movie}</p>

              <button
                className={css.heart}
                onClick={() => toggleLike(character)}
              >
                <Heart fill={isLiked ? "red" : "none"} color="red" />
              </button>
            </div>
          );
        })}
      </div>

      {/* <!-- filter is here ! --> */}
      <div className={css.filter}></div>
    </>
  );
};

export default Characters;
