import { Link } from "react-router-dom"
import getPokemonImageUrl from '../../common'

const PokemonItem = ({pokemon})=>{
    return (
        <li>
          <img src={getPokemonImageUrl(pokemon)}></img>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      )
}

export default PokemonItem