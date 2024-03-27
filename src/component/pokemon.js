import React, { useState,useEffect } from 'react';

function pokemon({ pokemonName }) {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((res) => setdata(e))
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, [pokemonName]);

  return (
    <div>
      {image && <img src={data.sprites.front_default} alt={pokemonName} />}
    </div>
  );
}

export default pokemon;
