import { memo } from "react";
// Pages!
import Home from "./pages/Home";
import Detail from "./pages/Detail.jsx";
import CategoryPage from "./pages/CategoryPage";
import Genres from "./pages/Genres";
import Favorite from "./pages/Favorite";
import MusicPage from "./pages/MusicPage.jsx";
import Characters from "./pages/Characters.jsx";
import Quiz from "./pages/Quiz.jsx";
import SettingPage from "./pages/SettingPage.jsx";
import ChatBot from "./pages/ChatBot";
// layout!
import Layout from "./Layout";
// react-router-dom!
import { Routes, Route } from "react-router-dom";
import OnlyCateg from "./pages/OnlyCateg.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="detail/:id" element={<Detail />} />

          <Route path="category/:category" element={<CategoryPage />} />

          <Route path="genres/:category" element={<Genres />} />
          <Route path="genres" element={<OnlyCateg />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="characters" element={<Characters />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="setting" element={<SettingPage />} />

          <Route path="chatbot" element={<ChatBot />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(App);
