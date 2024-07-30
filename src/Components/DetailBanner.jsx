import { useParams } from "react-router-dom";
import { useCountry } from "../context/UseCountry";
import "./DetailBanner.css";
import Border from "./Border";
import Spinner from "./Spinner";

function DetailBanner() {
  const { name } = useParams();
  const { countries, formatPopulation, isLoading } = useCountry();

  // Ensure the data is available
  if (!countries || countries.length === 0) {
    return <div>Loading...</div>;
  }
  if (isLoading) return <Spinner />;

  const country = countries.find((c) => c.name.common === name);

  // Handle case when country is not found
  if (!country) {
    return <div>Country not found</div>;
  }

  const nativeNameObj = country.name.nativeName;
  const first = Object.keys(nativeNameObj)[0];
  const nativeName = nativeNameObj[first].common;

  const currencies = country.currencies;
  const currenciesCode = Object.keys(currencies)[0];
  const currenciesName = currencies[currenciesCode].name;

  const languages = country.languages;
  const allLanguages = Object.values(languages);

  return (
    <div className="detailBanner">
      <div>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>

      <div className="detailText">
        <div>
          <h1>{country.name.common}</h1>
          <p>
            Native Name:<span>{nativeName}</span>
          </p>
          <p>
            Population:<span>{formatPopulation(country.population)}</span>
          </p>
          <p>
            Region:<span>{country.region}</span>
          </p>
          <p>
            Sub Region:<span>{country.subregion}</span>
          </p>
          <p>
            Capital:<span>{country.capital}</span>
          </p>
        </div>
        <div className="right">
          <p>
            Top Level Domain:<span>{country.tld.join(", ")}</span>
          </p>
          <p>
            Currencies:<span>{currenciesName}</span>
          </p>
          <p>
            Languages:<span>{allLanguages.join(", ")}</span>
          </p>
        </div>
        {country.borders && (
          <p className="Borders">
            <p> Border countries:</p>
            {country.borders.map((bor) => (
              <Border text={bor} key={bor} />
            ))}
          </p>
        )}
      </div>
    </div>
  );
}

export default DetailBanner;
