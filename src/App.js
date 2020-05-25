import React from "react";
import "./App.css";

const SlotM = () => {
  let x = "😄";
  let y = "😄";
  let z = "😄";
  if (x === y && y === z) {
    return (
      <>
        <div className="slot-inner">
          <h2 className="heading-style2">
            {x}
            {y}
            {z}
          </h2>
          <h1 className="heading-style2">Slot is matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot-inner">
          <h2 className="heading-style2">
            {x}
            {y}
            {z}
          </h2>
          <h1 className="heading-style2">Slot is matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading-style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold", background: "#fff" }}>
          Slot machine game 🎰
        </span>
        <SlotM />
        <SlotM />
        <SlotM />
      </h1>
    </>
  );
};

export default App;
