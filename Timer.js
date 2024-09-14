import React, { useState, useEffect } from "react";
import "./Timer.css";
export default function Timer() {
  let [hor, setHor] = useState(0);
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);
  let [val, setVal] = useState("");

  let [horError, setHorError] = useState("");
  let [minError, setMinError] = useState("");
  let [secError, setSecError] = useState("");
  let [action, setAction] = useState("Start");

  let [isRunning, setIsRunning] = useState(false);
  let interval = null;

  function reset() {
    setHor(0);
    setMin(0);
    setSec(0);
    setAction("Start");
    setIsRunning(false);
    setVal(0);
  }

  function decrement() {
    if (hor == 0 && min == 0 && sec == 0) {
      setIsRunning(!isRunning);
    } else if (sec == 0) {
      if (min == 0) {
        hor = hor - 1;
        setHor(hor);
        min = 59;
      } else {
        min = min - 1;
      }
      sec = 59;
      setMin(min);
    } else {
      sec = sec - 1;
    }
    setSec(sec);
  }

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(decrement, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function getHour(e) {
    let h = e.target.value;
    if (!isRunning) {
      if (h < 25) {
        if (!h) {
          h = 0;
        }
        setHorError("");
        setHor(h);
      } else {
        setHorError("Invalid Time");
      }
    } else {
      h ? setHorError("Time is Already Running") : setHorError("");
    }
  }
  function getMin(e) {
    let m = e.target.value;
    if (!isRunning) {
      if (m < 60) {
        if (!m) {
          m = 0;
        }
        setMinError("");
        setMin(m);
      } else {
        setMinError("Invalid Time");
      }
    } else {
      m ? setMinError("Time is Already Running") : setMinError("");
    }
  }
  function getSec(e) {
    let s = e.target.value;
    if (!isRunning) {
      if (s < 60) {
        if (!s) {
          s = 0;
        }
        setSecError("");
        setSec(s);
      } else {
        setSecError("Invalid Time");
      }
    } else {
      s ? setSecError("Time is Already Running") : setSecError("");
    }
  }
  function start() {
    if (isRunning) {
      setAction("Start");
    } else {
      setAction("Stop");
    }
    setIsRunning(!isRunning);
  }
  return (
    <div className="Timermain">
      <h1>
        {hor < 10 ? "0" + hor : hor}:{min < 10 ? "0" + min : min}:
        {sec < 10 ? "0" + sec : sec}
      </h1>
      <div className="hour">
        <div className="err_msg" id="hour-error-msg">
          {horError}
        </div>
        <div>
          Hour:
          <input className="hour-input" type="number" onChange={getHour} />
        </div>
      </div>
      <div className="min">
        <div className="err_msg" id="min-error-msg" value={val}>
          {minError}
        </div>
        <div>
          Minutes:
          <input className="min-input" type="number" onChange={getMin} />
        </div>
      </div>
      <div className="sec">
        <div className="err_msg" id="sec-error-msg">
          {secError}
        </div>
        <div>
          Seconds:
          <input className="sec-input" type="number" onChange={getSec} />
        </div>
      </div>

      <div className="btns">
        <button onClick={start} className="buttons">
          {action}
        </button>
        <button onClick={reset} className="buttons">
          Reset
        </button>
      </div>
    </div>
  );
}
