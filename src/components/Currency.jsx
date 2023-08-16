// components/CurrencyDisplay.js
import React from "react";

const CurrencyDisplay = ({ value }) => {
  // Format the currency value using the INR symbol and separators
  const formattedValue = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

  return <span>{formattedValue}</span>;
};

export default CurrencyDisplay;
