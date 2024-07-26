import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const formatPopulation = function (po) {
  return new Intl.NumberFormat(navigator.languages).format(po);
};
function CountryCard({ country }) {
  const navigate = useNavigate();
  // console.log(country);
  const handleClick = () => {
    navigate(`/detail/${country.name.common}`);
  };

  return (
    <div className="countryLogo" onClick={handleClick}>
      <img src={country.flags.png} alt={country.flags.alt} />
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
