// App.js
import React from 'react';
import { useState} from "react"
import Callpokemon from './component/Callpokemon';

function App() {
   // const pokemonName = "squirtle"; 
let [pokemonname,setpokemonname]=useState('');
let takename=(e)=>{
  setpokemonname(e.target.value)
}
let submit=(e)=>{
 e.preventDefault();
}
    return (
        <>
        <div className="App">
            <div className='Sty'>
            <input  onChange={takename} value={pokemonname} placeholder='enter your pokemon name'/> 
              
              {/* <button type="button" onClick={submit}>Get Image</button> */}
            <Callpokemon pokemonName={pokemonname} />
            <h1>Your Pokémon: {pokemonname}</h1>
            </div>
        </div>
        </>
    );
}

export default App;


