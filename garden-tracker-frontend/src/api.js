class Api{
	static baseURL = 'http://localhost:3000'

	static fetchGardens(){
		return fetch('http://localhost:3000/gardens')
		.then(parseJSON)
	}

	static fetchPlants(){
		fetch('http://localhost:3000/plants')
		.then(res => res.json())
		.then(resObj => {
			resObj.data.forEach(this.sanitizeAndAddPlant)
		})
		.then(() => console.log(Plant.all))
	}

	static sanitizeAndAddPlant(plantObj){
		let sanitized = {...plantObj.attributes, id: plantObj.id}
		new Plant(sanitized)
	}

	static sanitizeAndAddGarden(gardenObj){
		let sanitized = {...gardenObj.attributes, id: gardenObj.id}
		new Garden(sanitized)
	}

	static newGarden(gardenObj){
		let configObj = {
			method: "POST",
			headers: {"Content-Type": "application/json", "Accepts": "application/json"},
			body: JSON.stringify(gardenObj)
		}
		fetch('http://localhost:3000/gardens', configObj)
		.then(res => res.json())
		.then(this.sanitizeAndAddGarden)
	}
}