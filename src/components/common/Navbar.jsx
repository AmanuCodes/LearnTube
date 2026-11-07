import { NavLink } from "react-router-dom";

export default function Navbar() {
  function isTabActive({ isActive }) {
    return `nav-tab ${isActive ? "active-tab" : ""}`;
  }

  return (
    <header className="nav-bar">
      <NavLink to="/" className="nav-logo">
        <span className="logo-icon"><img className="logo-img" src="/src/assets/images/branding/LT_icon.png" alt="LearnTube logo" /></span>
        <span className="brand-name">
          LearnTube
        </span>
      </NavLink>

      <nav className="nav">
        <NavLink className={isTabActive} to="/" end>
          Home
        </NavLink>
        <NavLink className={isTabActive} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={isTabActive} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={isTabActive} to="/search">
          Search
        </NavLink>
      </nav>
    </header>
  );
}
