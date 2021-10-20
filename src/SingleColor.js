import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  // extract rgb values from array
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    // only display clipboard alert for 3 seconds
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      // check index to determine darkness of background color, darker backgrounds get white text
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // copy hax value of this color to the clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className=" percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
