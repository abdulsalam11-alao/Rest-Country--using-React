import { useCountry } from "../context/UseCountry";
import CountryCard from "./CountryCard";
import Spinner from "./Spinner";

function Body() {
  const { filteredCountries, isLoading } = useCountry();

  if (isLoading) return <Spinner />;

  return (
    <div className="main">
      {filteredCountries.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </div>
  );
}

export default Body;
