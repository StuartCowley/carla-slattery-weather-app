/* eslint-disable-next-line no-console */
/* eslint-disable-next-line import/no-extraneous-dependencies  */
import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Location not recognised - please try again");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops! Server error :-( Please try later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
