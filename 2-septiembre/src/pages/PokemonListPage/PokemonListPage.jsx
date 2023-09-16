import Loading from "../../components/Loading"
import PokemonItem from "./components/PokemonItem"
import pokemonUseQuery from './usePokemonList'

const PokemonListPage = ()=> {
    const { loading, error, pokemonList, loadMorePokemon } = pokemonUseQuery()

    if(loading) return <Loading />
    if(error) return <p>{error}</p>

    return (
        <div>
          <ul>
            {pokemonList.map((pokemon) => 
              (<PokemonItem key={pokemon.id} pokemon={pokemon} />)
            )}
          </ul>
          <button onClick={loadMorePokemon}>Load More</button>
        </div>
      )
  }

export default PokemonListPage