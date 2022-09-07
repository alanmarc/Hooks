import React from 'react';
import { LoadingQuote } from '../components/LoadingQuote';
import { Quote } from '../components/Quote';
import { useCounter, useFetch } from '../hooks/';

export const Layout = () => {

    const { counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author} = !!data && data[0];

    return (
        <div>
            <h1> Breacking Bad Quotes</h1>
            <br/>
            {
                isLoading
                ?  <LoadingQuote/>
                 
                 : <Quote
                    quote = {quote}
                    author = {author}
                    />
            }
            <button 
                onClick={  () => increment() }
                disabled= { isLoading }
                className='btn btn-primary'>
                Next quote
            </button>
        </div>
    )
}
