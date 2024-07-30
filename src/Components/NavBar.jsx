import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeProvider";
import "./NavBar.css";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <h1>Where in the World?</h1>
      <h2 onClick={toggleTheme} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </h2>
    </nav>
  );
}

export default NavBar;
