import { useEffect, useState } from 'react';
import { Message } from './Messaje';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
            {
                username: 'mayito', 
                email: 'mayito@me.com'
            });

    const {username, email} = formState;

    /**
     * Updates the form state based on the target element's name and value.
     *
     * @param {Object} target - The target element containing the name and value.
     * @return {void} 
     */
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
    }, []);

    useEffect(() => {
    }, [formState]);

    useEffect(() => {
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
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
        {
            (username === 'mayito') && <Message/>
        }
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                aria-label="Email"
                name="email"
                value={email}
                onChange={onInputChange}
                 />

                 
        </>
    );
}