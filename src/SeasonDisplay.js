import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach, it's summer",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold! it's winter",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
