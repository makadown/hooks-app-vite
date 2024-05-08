import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { username, email, password, onInputChange, onResetForm } = useForm( {
        username: '',
        email: '',
        password: ''
    });    
    
    return (
        <>
            <h1>Form with Custom Hook</h1>
            <hr />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                aria-label="Username" 
                name="username"
                value={username}
                onChange={onInputChange}
                 />
         
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                aria-label="Email"
                name="email"
                value={email}
                onChange={onInputChange}
                 />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={password}
                onChange={onInputChange}
                />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
                 
        </>
    );
}