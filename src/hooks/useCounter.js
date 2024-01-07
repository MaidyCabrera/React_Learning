import { useState } from "react";
export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  const reset = () => setCount(initialValue);


  return { increment, decrement, reset, count };
};
