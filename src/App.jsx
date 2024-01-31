import "./styles.css";
import Header from "./components/Header";
import TVShows from "./components/TVShows";
import Actors from "./components/Actors";
import Movies from "./components/Movies";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
    case "/movies":
      component = <Movies />;
      break;
    case "/shows":
      component = <TVShows />;
      break;
    case "/actors":
      component = <Actors />;
      break;
  }
  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default App;
