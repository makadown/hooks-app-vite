import { useState } from 'react';

/**
 * This is a custom hook that returns the form state and a function to update it.
 * @param {*} initialForm 
 * @returns 
 */
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    /**
     * Updates the form state based on the target element's name and value.
     *
     * @param {Object} target - The target element containing the name and value.
     * @return {void} 
     */
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState, // destructuring the form state so we can retrieve every property
       // formState,
        onInputChange,
        onResetForm
    }

}