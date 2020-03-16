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

	static newPlant(newPlantObj){
		let configObj = {
			method: "POST",
			headers: {"Content-Type": "application/json", "Accepts": "application/json"},
			body: JSON.stringify(newPlantObj)
		}
		debugger
		fetch(`http://localhost:3000/plants`, configObj)
		.then(res => res.json())
		.then(this.sanitizeAndAddGarden)
	}

	

	static createPlantField(e){
		let targetGardenId = parseInt(e.target.parentNode.id)
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

	static createNewPlantForm(e){
		let targetGardenId = parseInt(e.target.parentNode.id)
		let newPlantField = document.querySelector("#new-plant-form")
		newPlantField.innerHTML = `
			<input hidden id="plant" value="${targetGardenId}" />
			Plant Name:
			<input id="plant" type="text"/>
			<br>
			Plant Type:
			<input id="plant" type="text"/>
			<br>
			Plant Family:
			<input id="plant" type="text"/>
			<br>
			<span id="plant-submit">Submit</span>
		`
		let plantSubmit = document.querySelector("#plant-submit")
		plantSubmit.addEventListener("click", Api.handleNewPlantSubmit)
	}

	static handleNewPlantSubmit(e){
		let newPlantField = document.querySelector("#new-plant-form")
		let plantInput = newPlantField.querySelectorAll("input#plant")
		let newPlantObj = {
			garden_id: plantInput[0].value,
			plantName: plantInput[1].value,
			plantType: plantInput[2].value,
			plantFamily: plantInput[3].value
		}
		Api.newPlant(newPlantObj)
		location.reload()
	}
}
