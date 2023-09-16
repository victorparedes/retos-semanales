import { useParams } from "react-router-dom";
import Loading from '../../components/Loading';
import CharacterNotFound from '../../components/CharacterNotFound';
import pokemonUseQuery from './usePokemonDetail'
import PokemonDetail from './components/PokemonDetail';

const PokemonDetailPage = ()=> {
    const { pokemonName } = useParams();
    const { loading, error, pokemon } = pokemonUseQuery(pokemonName)
  
    if (loading) return <Loading />
    if (error) return <p>{error}</p>
    if (pokemon) return <PokemonDetail pokemon={pokemon} />

    return <CharacterNotFound /> 
  }

  export default PokemonDetailPage