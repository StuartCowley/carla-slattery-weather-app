import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__min-temperature">
        <p>Min: {temperature.min} &deg;C</p>
      </div>
      <div className="forecast-details__max-temperature">
        <p>Max: {temperature.max}&deg;C</p>
      </div>
      <div className="forecast-details__humidity">
        <p>Humidity: {humidity}%</p>
      </div>
      <div className="forecast-details__wind">
        <p>
          Wind: {wind.speed}mph, {wind.direction}
        </p>
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
