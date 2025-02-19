import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCountry } from "../context/UseCountry";

function CountryCard({ country }) {
  const navigate = useNavigate();
  const { formatPopulation } = useCountry();
  // console.log(country);
  const handleClick = () => {
    navigate(`/detail/${country.name.common}`);
  };

  return (
    <div className="countryLogo" onClick={handleClick}>
      <img src={country.flags.png} alt={country.flags?.alt || "Country Flag"} />
      <div>
        <h1>{country.name.common}</h1>
        <p>
          Population:<span>{formatPopulation(country.population)}</span>
        </p>
        <p>
          Region:<span>{country.region}</span>
        </p>
        <p>
          Capital:<span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}
CountryCard.propTypes = {
  country: PropTypes.object,
};

export default CountryCard;
