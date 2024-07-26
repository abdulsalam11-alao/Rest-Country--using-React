import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const url = "https://restcountries.com/v3.1/all";

const CountryContext = createContext();
const initialState = {
  isLoading: false,
  countries: [],
  filteredCountries: [],
  searchQuery: "",
  regionFilter: "",
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "country/loaded":
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case "search":
      return {
        ...state,
        searchQuery: action.payload,
        filteredCountries: state.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ),
      };
    case "region":
      return {
        ...state,
        regionFilter: action.payload,
        filteredCountries: state.countries.filter((country) =>
          action.payload ? country.region === action.payload : true
        ),
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getCountry() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${url}`);
        const data = await res.json();
        dispatch({ type: "country/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error while loading the countries",
        });
      }
    }
    getCountry();
  }, []);
  const formatPopulation = function (po) {
    return new Intl.NumberFormat(navigator.languages).format(po);
  };

  return (
    <CountryContext.Provider
      value={{
        ...state,
        dispatch,
        formatPopulation,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

CountryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}

export { CountryProvider, useCountry };
