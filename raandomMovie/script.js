const api_key = "d3f6b22c"
const result = document.getElementById('result')
const input = document.getElementById('inp')
const btn = document.getElementById('btn')
btn.addEventListener("click", fetchData)
function fetchData(){
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=${api_key}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data.Search);
        displayData(data.Search)
    })
    .catch(function(err){console.log(err)})
}
function displayData(dogs){
    dogs.forEach(function(d){
        const myDiv = document.createElement('div')  
        myDiv.classList.add('dog')
        const img = document.createElement('img')
        img.src = m.Poster;
        img.alt = m.Title;
        const title = document.createElement('h2')
        title.textContent = m.Title
        myDiv.append(img, title)
        resultsDiv.appendChild(myDiv)
    });
}