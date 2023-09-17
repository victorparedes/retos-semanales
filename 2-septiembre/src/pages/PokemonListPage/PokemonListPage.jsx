import Loading from "../../components/Loading"
import PokemonItem from "./components/PokemonItem"
import pokemonUseQuery from './usePokemonList'
import { useState } from "react"

const PokemonListPage = ()=> {
    const { loading, error, pokemonList, loadMorePokemon, findByName } = pokemonUseQuery()
    const [valor, setValor] = useState('');

    if(loading) return <Loading />
    if(error) return <p>{error}</p>

    const handleClick = (event)=>{
      if(event.key === 'Enter') findByName(valor)
    }
    
    return (
        <>
          <div>
              <input 
                type="text" 
                placeholder="Buscar por nombre" 
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                onKeyUp={handleClick}
              />
          </div>
          <div>
            <ul>
              {pokemonList.map((pokemon) => 
                (<PokemonItem key={pokemon.id} pokemon={pokemon} />)
              )}
            </ul>
            <button onClick={loadMorePokemon}>Load More</button>
          </div>
        </>
      )
  }

export default PokemonListPage