//one way of writing an API call, chaining can get annoying
// axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
//     console.log(response)
//     ability = response.data.abilities[0].ability
//     abilityURL = ability.url
//     console.log(ability)
// }).catch((error) => {
//     console.log('an error occured')
// })

//another way by creating a function and using async/await

// const getPokemon = async (id) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) //the base URL or base PATH
//     console.log('you requested ' + response.data.name)
//     ability = response.data.abilities[0].ability
//     abilityURL = ability.url

//     const abilityResponse = await axios.get(abilityURL)
//     console.log(abilityResponse)
// }

const randNum = () => {
    return Math.floor(Math.random() * 906)
}

const getPokemon = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) //the base URL or base PATH
    console.log('you requested ' + response.data.name)
    console.log(response)
    imageurl = response.data.sprites.other['official-artwork']['front_default']
    console.log(imageurl)
    imageHolder = document.getElementById('pokemon_image')
    console.log(imageHolder)
    imageHolder.src = imageurl
}



