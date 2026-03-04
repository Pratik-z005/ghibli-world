import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [likedCharacters, setLikedCharacters] = useState(() => {
    const saved = localStorage.getItem("liked-characters");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("liked-characters", JSON.stringify(likedCharacters));
  }, [likedCharacters]);

  const toggleLike = (character) => {
    const exists = likedCharacters.find((c) => c.id === character.id);

    if (exists) {
      setLikedCharacters(likedCharacters.filter((c) => c.id !== character.id));
    } else {
      setLikedCharacters([...likedCharacters, character]);
    }
  };

  return (
    <CharacterContext.Provider value={{ likedCharacters, toggleLike }}>
      {children}
    </CharacterContext.Provider>
  );
};
