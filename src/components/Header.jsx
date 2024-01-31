import "./Header.css";
import CustomLink from "./CustomLink";
export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">React Flixx</a>
        </div>
        <nav>
          <ul>
            <CustomLink href="/movies">Movies</CustomLink>
            <CustomLink href="/shows">TV Shows</CustomLink>
            <CustomLink href="/actors">Actors</CustomLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
