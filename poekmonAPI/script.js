const mainDiv = document.getElementById('results');
const input = document.getElementById('inp');
const btn = document.getElementById('btn');

//arrow function - ES6(Egma script 6)-2015
// const sum = ()=> console.log("Hi");
const fetchData = () =>
{
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${PokemonNumber}/`)
    .then((res)=>res.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
}
btn.addEventListener('click',fetchData)

const displayData = (data) =>
{
    const div = document.createElement('div')
    div.classList.add('pokemon')
    const image = document.createElement('img')
    image.src = data.sprites.other.home.front_default
    image.alt = data.name;
    const rightDiv = document.createElement('div')
    rightDiv.classList.add('rightDiv')
    const title = document.createElement('h2')
    title.textContent = data.name;
    const height = document.createElement('p')
    height.textContent = "Height : "+data.height;
    const weight = document.createElement('p')
    weight.textContent = "Weight : "+data.weight;

    rightDiv.append(title,height,weight);
    div.append(image,rightDiv)
    mainDiv.appendChild(div)
}