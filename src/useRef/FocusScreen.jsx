import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickFocus = () => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={ inputRef }
                type='text'
                placeholder='Ingrese su nombre'
                className='form-control'
            />

            <button
                className=' btn btn-primary mt-3'
                onClick={ onClickFocus }  
            >
                Set focus
            </button>
        </div>
    )
}
