const carData = document.getElementById('car')
const cars =
[
    
]
function displayCar(){
    cars.forEach(function(c){
        const myDiv = document.createElement('div')
        myDiv.classList.add('car')
    })
}
displayCar();