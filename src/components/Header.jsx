import "./Header.css";
import CustomLink from "./CustomLink";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/">React Flixx</Link>
        </div>
        <nav>
          <ul>
            <CustomLink to="/movies">Movies</CustomLink>
            <CustomLink to="/shows">TV Shows</CustomLink>
            <CustomLink to="/actors">Actors</CustomLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
