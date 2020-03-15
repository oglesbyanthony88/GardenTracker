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

	static fetchGardensForReset(){
		fetch('http://localhost:3000/gardens')
		.then(res => res.json())
		.then(resObj => {
			resObj.data.forEach(this.sanitizeAndAddGarden)
		})
	}

	static newPlant(plantObj){
		let configObj = {
			method: "POST",
			headers: {"Content-Type": "application/json", "Accepts": "application/json"},
			body: JSON.stringify(plantObj)
		}
		fetch('http://localhost:3000/plant', configObj)
		.then(res => res.json())
		.then(this.sanitizeAndAddPlant)
	}

	static createPlantField(e){
		let targetGardenId = parseInt(e.target.id)
		let plantField = document.querySelector(`#plant-field-${targetGardenId}`)
		let gardenPlantsArr = Plant.all.filter(plant => plant.garden_id === targetGardenId)
		let gardenPlants = ''
		for (const plant of gardenPlantsArr){
			gardenPlants += Api.createIndividualPlant(plant)
		}

		plantField.innerHTML += gardenPlants

	}

	static createIndividualPlant(plant){
		return `<div class="plant" plant-id="plant.id">
							<li>${plant.plantName}</li>
							<li>${plant.plantType}</li>
						</div>
							`

	}

}