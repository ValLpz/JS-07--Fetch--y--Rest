// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/'; //Es una constante que guarda la url de pokemonAPI

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));*/

/* fetch async Proporciona una forma fácil y lógica de obtener recursos de forma asincrona por la red.
En este caso se obtiene informacion sobre un Pokemon dado mediante ID/name y fetch hace la solicitud a la API,
 devolviedno los datos del Pokemon*/

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
} 

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('pokemon-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})

// obtener el anterior

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        if (currentPokeId > 1) {
            const newId = currentPokeId - 1;
            localStorage.setItem('currentPokeId', newId);
            const pokemon = await fetchPokemon(newId);
            console.log(pokemon.name);
        } else {
            console.log('No previous Pokémon available.');
        }
    })
       /* document.getElementById('previous-btn')
        .addEventListener('click', async () => {
            const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
            const newId = Math.max(1, currentPokeId -1);
            const pokemon = await fetchPokemon(newId);
            console.log(pokemon.name);
        })*/
    

// obtener el siguiente
document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        localStorage.setItem('CurrentPokeId', newId);//
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);//
    })



////////////////// POST
//

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))

//Manipulación del DOM y agregar card

// Definir el objeto 
const Pokemon = {
    id: "Mew",
    pokemonname: "Mew",
    description: "Pokémon de nueva especie, primera generación",
    tip: "Psíquico, Raro",
};

// Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");

// Crear e insertar la imagen del Pokémon
const imageElement = document.createElement("img");
imageElement.src = "https://i.blogs.es/18c707/pokemon-scarlet-violet-mew-mewtwo/1200_800.jpeg";
imageElement.alt = "Mew";

// Crear e insertar los elementos de texto para la tarjeta
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
cardTitleElement.textContent = Pokemon.pokemonname;

const cardTipElement = document.createElement("p");
cardTipElement.textContent = `Tipo: ${Pokemon.tip}`;

const cardDescElement = document.createElement("p");
cardDescElement.textContent = `Descripción: ${Pokemon.description}`;

// Renderizar la tarjeta
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardTipElement, cardDescElement);

// Manejo de entrada de texto
const textInput = document.getElementById("pokemon-input");
textInput.addEventListener("input", (e) => {
    const textContent = e.target.value; 
    console.log(textContent); 
});

/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch 