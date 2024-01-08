import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  console.log(hasError);
  
  return (
    <>
      <>
        <div>
          <h1>MultipleCustomHooks</h1>
          <hr />
            {loading ? (
                <LoadingQuote />
            ) : (
                <Quote quote={quote} author={author} />
            )}
        </div>
      </>
      <button className="btn btn-primary" onClick={() => increment()} disabled={ loading}>
        Next quote
      </button>
    </>
  );
};
