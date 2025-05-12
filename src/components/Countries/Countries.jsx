import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  // this is for countries length--
  const [countries, setCountries] = useState([]);

  // for visited countries-----
  const [visitedCountries, setvisitedCountries] = useState([]);
  //visited countries event handler function--------------------------
  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  // for flags--------------------------------------------------------
  const [visitedFlags, setVisitedFlags] = useState([]);
  // useState er empty array niye rakhci cause click kor, e add korbo seta emepty ...visitedFlags, flag diye add korbo--r alada ekta container khule seta add korbo---------

  //flags event handler function----------------------------------------
  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  // for data loading from API-----------------------------------------
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      {/* total countries */}
      <h3>Countries:{countries.length}</h3>
      {/* visited countries */}
      <div>
        <h2>Visited Country:{visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* for visited flags */}
      <div>
        {visitedFlags.map((flag, index) => (
          <img key={index} src="{flag}"></img>
        ))}
      </div>
      {/* display countries */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
