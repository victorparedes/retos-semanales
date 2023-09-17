import { Link } from "react-router-dom"
import getPokemonImageUrl from '../../common'
import './PokemonItem.css'

const PokemonItem = ({pokemon})=>{
    return (
      <Link to={`/pokemon/${pokemon.name}`} className="pokemon-item-text" >
        <div className="pokemon-item">
          <img src={getPokemonImageUrl(pokemon)}className="pokemon-item-image" />
          <h2>{pokemon.name}</h2>
        </div>
      </Link>
      )
}

export default PokemonItem