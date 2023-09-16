import getPokemonImageUrl from '../../common'
  
const PokemonDetail = ({pokemon})=> {
    return (
      <article>
        <h1>Nombre - {pokemon.name}</h1>
        <img src={getPokemonImageUrl(pokemon)} />
        <h2>Habilidades</h2>
        <ul>
          { pokemon.pokemon_v2_pokemonabilities.map((item)=> <li>{item.pokemon_v2_ability.name}</li> ) }
        </ul>
        <h2>Stats</h2>
        <ul>
          { pokemon.pokemon_v2_pokemonstats.map((item)=> <li>{item.pokemon_v2_stat.name} - {item.base_stat}</li> ) }
        </ul>
      </article>  
    )
  }
  
export default PokemonDetail