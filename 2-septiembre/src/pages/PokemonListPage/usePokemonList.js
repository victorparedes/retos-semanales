import { useQuery, gql } from '@apollo/client';

const GET_POKEMONLIST = gql `query pokemonList ($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }`

const pokemonUseQuery = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONLIST, { variables: { limit: 10, offset: 0 } });
    
    const pokemonList = data ? data.pokemon_v2_pokemon : []

    const loadMorePokemon = ()=>{
        fetchMore({ 
            variables: { limit: 10, offset: data.pokemon_v2_pokemon.length },
            updateQuery: (prev, { fetchMoreResult })=> {
                if (!fetchMoreResult) return prev;
                return {
                    pokemon_v2_pokemon: [...prev.pokemon_v2_pokemon, ...fetchMoreResult.pokemon_v2_pokemon]
                }
            }
        })
    }

    return { loading, error, pokemonList, loadMorePokemon }
}

export default pokemonUseQuery