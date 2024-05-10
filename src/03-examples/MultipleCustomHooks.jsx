import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const {counter, increment, decrement, reset} = useCounter();
  const { data, isLoading, hasError, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  

  return (
    <>
    <h1>Información de pokemón</h1>
    <hr />
    <pre>Poke info json</pre>
    {
      isLoading ? <LoadingMessage/> : <PokemonCard pokemon={data}/> 
    }
    <button className='btn btn-primary mt-2' onClick={ () => counter> 1 ? decrement() : null } >Anterior</button>
    <button className='btn btn-primary mt-2' onClick={ () => increment() }>Siguiente</button>
    </>
  );
}
