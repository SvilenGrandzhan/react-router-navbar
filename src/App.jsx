import "./styles.css";
import ROUTER_MAP from "./components/routerMap";
import Header from "./components/Header";

function App() {
  const component = ROUTER_MAP[window.location.pathname];
  return (
    <>
      <Header />
      {component()}
    </>
  );
}

export default App;
