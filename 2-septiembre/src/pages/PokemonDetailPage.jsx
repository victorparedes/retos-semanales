import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Loading from '../components/Loading';
import CharacterNotFound from '../components/CharacterNotFound';

{/* <img src={data.sprites.front_default} /> */}
const CharacterDetail = ({data})=> {
  return (
    <article>
      <h1>Nombre - {data.name}</h1>
      <img src={data.sprites.front_default} />
      <h2>Especie - {data.species.name}</h2>      
      <h2>Habilidades</h2>
      <ul>
        { data.abilities.map((item)=> <li>{item.ability.name}</li> ) }
      </ul>
      <h2>Stats</h2>
      <ul>
        { data.stats.map((item)=> <li>{item.stat.name} - {item.base_stat}</li> ) }
      </ul>
    </article>  
  )
}


const fetchPokemonDetails = async (pokemonName) =>{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if (!response.ok) throw new Error('Personaje no encontrado')
  return await response.json()
}

const PokemonDetailPage = ()=> {
    const { pokemonName } = useParams();
    const [ pokemonData, setPokemonData ] = useState(null)
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)  

    useEffect(() => {
      fetchPokemonDetails(pokemonName)
        .then((data) => {
          setPokemonData(data)
        })
        .catch((error) => {
          setError(error.message)
        })
        .finally(()=>{
          setLoading(false)
        }) 

    }, [pokemonName])
  
    return (
      <div>
        { 
          loading ? (<Loading />) : 
          error ? (<p>{error}</p>) : 
          pokemonData ? <CharacterDetail data={pokemonData} /> : 
          <CharacterNotFound />
        }
      </div>
    )    
  }

  export default PokemonDetailPage