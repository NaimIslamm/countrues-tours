const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, cca3 } = country;
  const [visitingCountry, setVisitingCountry] = useState(false);
  const handleVisited = () => {
    setVisitingCountry(!visitingCountry);
  };

  return (
    <div className={`country ${visitingCountry ? "visited" : ""}`}>
      <h3>Name:{name.common}</h3>
      <img src={flags.png} alt="flag-image" />
      <p>Population:{population}</p>
      <p>Code:{cca3}</p>
      <button onClick={handleVisited}>
        {visitingCountry ? "Visited" : "visit"}
      </button>
      {visitingCountry ? "visited" : ""}
      <button onClick={() => handleVisitedCountry(country)}>
        Add Visited Country
      </button>
    </div>
  );
};
import { useState } from "react";
import "./Country.css";
export default Country;
