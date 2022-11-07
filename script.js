const displayResults = document.querySelector("#displayResults")
const input = document.querySelector("#searchInput")
console.log(displayResults)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '382f78a693msh7a0e8542fdc85a9p1157b9jsn25244694a7b2',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const renderResults = (results) => {
    console.log(results)
    displayResults.innerHTML = ""


    for (let result of results) {
    displayResults.innerHTML +=`
    <div class="card-body">
    <img src="${result.album.cover_medium}" class="card-img-top"/>
    <p>${result.title}</p>
    </div>`
}
}

const fetchResults = (term) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${term}`, options)
	.then(response => response.json())
	.then(response => renderResults(response.data))
	.catch(err => console.error(err));

    
}



input.addEventListener("input", function(event) {
    fetchResults(event.target.value)
})
   
