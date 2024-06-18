import "./styles.css";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import TVShows from "./components/TVShows";
// import Actors from "./components/Actors";
// import Movies from "./components/Movies";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    // <>
    //   <Header />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Movies />}
    //     />
    //     <Route
    //       path="/movies"
    //       element={<Movies />}
    //     />
    //     <Route
    //       path="/shows"
    //       element={<TVShows />}
    //     />
    //     <Route
    //       path="/actors"
    //       element={<Actors />}
    //     />
    //   </Routes>
    // </>
  );
}

export default App;
