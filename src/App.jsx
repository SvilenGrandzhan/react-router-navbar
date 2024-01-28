import "./styles.css";

import Header from "./components/Header";
import TVShows from "./components/TVShows";
import Actors from "./components/Actors";
// import { ROUTER_MAP } from "./components/routerMap";

function App() {
  // console.log(ROUTER_MAP);
  // let path = window.location.pathname;
  // let component = ROUTER_MAP[path];

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;
    case "/shows.html":
      component = <TVShows />;
      break;
    case "/actors.html":
      component = <Actors />;
      break;
    default:
      break;
  }
  return (
    <>
      <Header />
      <h1>Home</h1>
      {component}
    </>
  );
}

export default App;
