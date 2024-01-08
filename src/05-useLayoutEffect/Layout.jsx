

import { useCounter} from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote} from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { author, quote } = data && data.length > 0 ? data[0] : { author: '', quote: '' };

    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />
                 : <Quote author={ author } quote={ quote } />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}