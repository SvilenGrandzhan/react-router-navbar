import TVShows from "./TVShows";
import Actors from "./Actors";
import Movies from "./Movies";

const ROUTER_MAP = {
  "/": Movies,
  "/movies": Movies,
  "/shows": TVShows,
  "/actors": Actors,
};

export default ROUTER_MAP;
