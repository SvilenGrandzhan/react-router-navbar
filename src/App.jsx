import "./styles.css";
import Header from "./components/Header";
import TVShows from "./components/TVShows";
import Actors from "./components/Actors";
import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Movies />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/shows"
          element={<TVShows />}
        />
        <Route
          path="/actors"
          element={<Actors />}
        />
      </Routes>
    </>
  );
}

export default App;
