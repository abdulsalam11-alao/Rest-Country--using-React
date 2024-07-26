import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
function NavBar() {
  return (
    <nav>
      <h1>Where in the World ?</h1>
      <h2>
        <FontAwesomeIcon icon={faMoon} />
        <span>Dark mode</span>
      </h2>
    </nav>
  );
}

export default NavBar;
