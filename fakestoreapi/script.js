const mainDiv = document.getElementById("main")
function fetchData() {
	fetch("https://api.sampleapis.com/codingresources/codingResources")
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
            console.log(data);displayData(data)
        })
    .catch(function(err){console.log(err)})
}
fetchData()
function displayData (arr)
{
    console.log(arr);
    arr.forEach(function (p)
    {
        const div = document.createElement("div")
				div.classList.add("myProduct")
				const image = document.createElement("img")
        image.src = p.url;
        image.alt = p.title;
        const id = document.createElement('h2')
        id.textContent = p.id;
        const type = document.createElement('p')
        type.textContent= p.types

				div.append(image,id,type)
				mainDiv.appendChild(div)
   })
}
displayData();