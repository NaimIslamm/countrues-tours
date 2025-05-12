const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  // country te object ta pathalam r shb gula destruction korlam then eigula details display te show korlam like, country name, flag, etc..
  const { name, flags, population, cca3 } = country;
  // 1st visit button useState & event handler----------
  const [visitingCountry, setVisitingCountry] = useState(false);
  const handleVisited = () => {
    // (!true/false) is use for toggle----
    setVisitingCountry(!visitingCountry);
  };

  return (
    // country class ta set korai ase bactik er mddhe 'visitingCountry' jodi true hoi tahle 'visited' class add hbe false hole : er pore--
    <div className={`country ${visitingCountry ? "visited" : ""}`}>
      {/* country name */}
      <h3>Name:{name.common}</h3>
      {/* country image */}
      <img src={flags.png} alt="flag-image" />
      {/* country Population */}
      <p>Population:{population}</p>
      {/* country Code */}
      <p>Code:{cca3}</p>
      <div className="button-container">
        <button onClick={handleVisited}>
          {visitingCountry ? "Visited" : "visit"}
        </button>
        {visitingCountry ? "visited" : ""}
        <button onClick={() => handleVisitedCountry(country)}>
          Add Visited Country
        </button>
        <button onClick={() => handleVisitedFlag(country.flags.png)}>
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};
import { useState } from "react";
import "./Country.css";
export default Country;
