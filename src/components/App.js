import React, { useEffect, useState } from "react";
import getForecast from "../requests/getForecast";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import "../styles/ForecastSummaries.css";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      setLocation,
      setErrorMessage
    );
  }, []);

  return (
    <div className="app-container">
      <h1>Five Day Weather Forecast</h1>
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
        placeholder="Enter city name"
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
