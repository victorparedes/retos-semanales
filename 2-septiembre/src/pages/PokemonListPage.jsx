import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import CharacterNotFound from "../components/CharacterNotFound"
import { Link } from "react-router-dom"

const fetchCharacterList = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    if(!response.ok) throw new Error('Personaje no encontrado')
    return await response.json()
}

const PokemonListPage = ()=> {
    const [ pokemonList, setPokemonList ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        fetchCharacterList()
        .then((data)=>{
            setPokemonList(data)
        })
        .catch((error)=>{
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false)
        }) 
    },[])

    return (
        <p>
            {
                loading ? <Loading /> :
                error ? (<p>{error}</p>) :
                pokemonList ? 
                (
                    <ul>
                        {pokemonList.results.map( x=> <li><Link to={`/pokemon/${x.name}`}>{x.name}</Link></li>)}
                    </ul>
                ):
                <CharacterNotFound />
            }
        </p>
    )
  }

export default PokemonListPage