const listado = document.querySelector('#contenedor-listado');
const title = document.querySelector('#title');
const carta = document.querySelector('#contenedor-carta');

function cargarListado(){

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data) => crearBoton(data.results));
}

function crearBoton(poke) {

    poke.forEach(el => {
        listado.innerHTML += `<button onclick="cargarPokemon('https://pokeapi.co/api/v2/pokemon/${el.name}')">${el.name}</button>`
    });
}

function cargarPokemon(url){
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => crearCarta(data));
}

function crearCarta(poke){

    const image = document.createElement('IMG');

    image.setAttribute('src', `${poke.sprites.other.dream_world.front_default}`);
    image.setAttribute('alt', `${poke.name}`);
    image.setAttribute('id', "pokeFoto");
    
    title.innerHTML = `${poke.name}`;

    if (carta.children.length == 1) {

        carta.appendChild(image);

    } else {
        
        carta.removeChild(document.querySelector('#pokeFoto'));
        carta.appendChild(image);

    }
}

cargarListado();