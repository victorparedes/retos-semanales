const getPokemonImageUrl = (data)=>{
    const imageUrl = data?.pokemon_v2_pokemonsprites[0]?.sprites
    if (!imageUrl) return ''
  
    const images = JSON.parse(imageUrl).front_default
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + images.split('/').pop()
  }

export default getPokemonImageUrl