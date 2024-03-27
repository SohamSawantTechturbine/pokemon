import React, { useState,useEffect } from 'react';

function CallPokemon({ pokemonName }) {


const [image, setImage] = useState(null);
const [data, setData] = useState(null);

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((res) => {
      setImage(res.sprites.front_default);
      setData(res);
    })
    .catch((error) => {
      console.error('Error fetching Pokemon data:', error);
    });
}, [pokemonName]);

return (
  <div className='c'>
    {image && <img src={image} alt={pokemonName} />}
    {data && data.types && (
      <div>
      <p>Type of: {data.types.map((type) => type.type.name).join(', ')}</p>,
      <p>Moves :{data.moves.slice(1,5).map((move)=>move.move.name).join(',')}</p>
  </div>  )}
  </div>
);
}
export default CallPokemon;
