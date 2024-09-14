import React, { useState } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
  const [comp, setComp] = useState("Timer");

  return (
    <div className="main">
      <div className="btns-menu">
        <button onClick={() => setComp("Timer")} className="bns">
          Timer
        </button>
        <button onClick={() => setComp("StopWatch")} className="bns">
          StopWatch
        </button>
      </div>

      {/* Common wrapper around both components */}
      <div className="component-wrapper">
        {comp === "Timer" ? <Timer /> : <StopWatch />}
      </div>
    </div>
  );
}

export default App;
