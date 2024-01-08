import React, { useMemo } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Here we go...");
  }
  return `${iterations} iterations done!`;
};

export const MemoHook = () => {
  const { count, increment } = useCounter(10);
  const [show, setShow] = React.useState(true);

  /*Use Memo me memoriza el valor de la funcion heavyStuff y solo si cambia count, se va a renderizar, si doy click en el botón Show/Hide este no se renderizará*/
  const memorizedValue = useMemo(() => heavyStuff(count), [count]);
  
  return (
    <>
      <h1>
        Counter: <small>{count}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>

    </>
  );
};
