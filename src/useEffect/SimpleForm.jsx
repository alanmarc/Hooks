import React, { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'alanmar',
        email: 'alanmar@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target}) =>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
      console.log('Useeffect called');
    }, []);

    useEffect(() => {
        console.log('formState changed');
      }, [formState]);

      useEffect(() => {
        console.log('email changed');
      }, [email]);
    

    return (
        <div>
            <h1>Formulario Simple</h1>
            <hr/>
            
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />
            { 
            (username === 'alanmarc') && <Message/> 
            }

            <input
                type="email"
                className='form-control mt-2'
                placeholder='correo@dominio.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />
            
        </div>
    )
}
