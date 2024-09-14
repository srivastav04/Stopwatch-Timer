import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

export default function StopWatch() {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hor, setHor] = useState(0);
  let [isRunning, setIsRunning] = useState(false);
  let [action, setAction] = useState("Start");

  function reset() {
    setSec(0);
    setMin(0);
    setHor(0);
    setIsRunning(false);
    setAction("Start");
  }

  function increment() {
    if (sec == 60) {
      if (min == 59) {
        min = 0;
        hor = hor + 1;
        setHor(hor);
      } else {
        min = min + 1;
      }
      sec = 0;
      setMin(min);
    } else {
      sec = sec + 1;
    }
    setSec(sec);
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(increment, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function start() {
    if (isRunning) {
      setAction("Start");
    } else {
      setAction("Stop");
    }
    setIsRunning(!isRunning);
  }
  return (
    <div className="Stopwatch-main">
      <h1>
        {hor < 10 ? "0" + hor : hor}:{min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}
      </h1>
      <div className="btns">
        <button className="sw-btns" onClick={start}>
          {action}
        </button>
        <button className="sw-btns" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
