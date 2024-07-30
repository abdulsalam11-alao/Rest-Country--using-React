import { useCountry } from "../context/UseCountry";
import CountryCard from "./CountryCard";
// import Message from "./Message";
import Spinner from "./Spinner";

function Body() {
  const { filteredCountries, isLoading } = useCountry();

  // if (filteredCountries.length <= 0) return <Message />;
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
