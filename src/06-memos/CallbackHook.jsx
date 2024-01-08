import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // useCallback is used to prevent the component to be re-rendered when the function is called, because into, we are using variables that are not into the function

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, [],);

  useEffect(() => {
  }, [incrementFather]);

  // const incrementFather = () => {
  //     setCounter(counter + 1);
  // }

  return (
    <>
      <h1>Callback Hook {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
