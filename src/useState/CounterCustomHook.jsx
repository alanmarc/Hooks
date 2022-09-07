import React from 'react'

import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset} = useCounter();
    return (
        <div>
            <h1>Counter with  Hook: { counter} </h1>

            <hr/>
            <button 
                className='btn btn-primary' 
                onClick={ () => increment(1)}>+1</button>
            <button 
                className='btn btn-primary'
                onClick={reset}
                >Reset</button>
            <button 
                className='btn btn-primary'
                onClick={ () => decrement(1)}
                >-1</button>
        </div>
    )
}
