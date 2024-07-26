import { useCountry } from "../context/UseCountry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const { dispatch } = useCountry();

  const handleSearchChange = (e) => {
    dispatch({ type: "search", payload: e.target.value });
  };

  const handleRegionChange = (e) => {
    dispatch({ type: "region", payload: e.target.value });
  };

  return (
    <header>
      <div className="searchBar">
        <div>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="select">
        <select onChange={handleRegionChange} defaultValue="">
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
