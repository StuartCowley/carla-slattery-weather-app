import React from "react";
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h2>errorMessage</h2>
  ) : (
    <h2>{`${city}, ${country}`}</h2>
  );
}
LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
