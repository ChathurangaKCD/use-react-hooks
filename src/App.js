import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isClockWise, setIsClockWise] = useState(true);
  const [changeEnabled, setEnabled] = useState(false);
  const [isPaused, setPaused] = useState(false);
  useEffect(
    () => {
      if (!isPaused && changeEnabled) {
        const id = setTimeout(() => {
          setIsClockWise(!isClockWise);
        }, 2000);
        return () => {
          clearTimeout(id);
        };
      }
    },
    [changeEnabled, isClockWise, isPaused]
  );
  const imgClass = `App-logo${isClockWise ? "" : " reverse"}${
    isPaused ? " paused" : ""
  }`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={imgClass} alt="logo" />
        <p>Count {count} </p>
        <p>Direction: {isClockWise ? "" : " counter"}clockwise</p>
        <p>Switch Direction : {changeEnabled ? "enabled" : "disabled"} </p>
        <button onClick={() => setEnabled(!changeEnabled)}>
          <strong>rotate {changeEnabled ? "" : "<<<"} >>> </strong>
        </button>
        <p>Animation state: {isPaused ? "paused" : "playing"}</p>
        <button onClick={() => setPaused(!isPaused)}>
          <strong> {isPaused ? "PLAY" : "PAUSE"} </strong>
        </button>
      </header>
      <button onClick={() => setCount(count + 1)}>(+1)</button>
      <button onClick={() => setCount(count - 1)}>(-1)</button>
    </div>
  );
}

export default App;
