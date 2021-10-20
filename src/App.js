import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // use values utility to create a list of color values at 10% intervals based on the hex value of the color
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <label htmlFor="hex">Hex Value</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
            name="hex"
            id="hex"
          />
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              // hex value from values utility
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
