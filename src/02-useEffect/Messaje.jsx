import { useEffect } from 'react';
import React from 'react';

export const Message = () => {

    useEffect(() => {
      console.log('carga el message');
    
      return () => {
        console.log('desmontado el message');
      }
    }, [])
    

  return (
    <>
            <h3>Usuario ya existe</h3>
    </>
  )
}
