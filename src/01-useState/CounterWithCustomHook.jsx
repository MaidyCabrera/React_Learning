import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
export const CounterCustomHookApp = () => {
  const { increment, decrement, reset, count } = useCounter(0);
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  return (
    <>
      <h1>Counter1: {count}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...state, counter1: increment() })}
      >
        +1
      </button>

      <button className="btn btn-primary" onClick={reset}>Reset</button>

      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...state, counter2: decrement() })}
      >
        -1
      </button>
    </>
  );
};
