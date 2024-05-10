import React from 'react';

export const PokemonCard = ({pokemon}) => {
    const {id, name, sprites} = pokemon;
  return (
    <section style={{height:200, border: '1px solid black'}}>
        <h2 className="text-capitalize"> #{id} - {name}</h2>        
        <div className="d-flex justify-content-evenly">
        { sprites &&  <img src={sprites.other?.dream_world?.front_default} alt={name} />}
        </div>
    </section>
  )
}
