import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { count, increment } = useCounter(10);
  const [show, setShow] = React.useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={count} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-primary ml-3" onClick={() => setShow()}>Show/Hide {JSON.stringify(show)}</button>
    </>
  );
};
