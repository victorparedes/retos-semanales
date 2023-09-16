import { useQuery, gql } from '@apollo/client';

const GET_POKEMONDETAIL = gql `query pokemonDetail ($name: String) {
    pokemon_v2_pokemon( where:{name: { _eq: $name}}) {
      id
      name
      pokemon_v2_pokemonabilities{
        pokemon_v2_ability { 
          name
        }
      }
      pokemon_v2_pokemonstats{
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }`
  
const pokemonUseQuery = (pokemonName) => {
    const { loading, error, data, fetchMore } = useQuery(GET_POKEMONDETAIL, { variables: { name: pokemonName } });
    const pokemon = data ? data.pokemon_v2_pokemon[0] : null
    return { loading, error, pokemon }
}

export default pokemonUseQuery