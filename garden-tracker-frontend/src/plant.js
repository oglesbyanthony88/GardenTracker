class Plant{

	static all = []

	constructor({id, plantName, plantType, plantFamily, garden_id}){
		this.id = id
		this.plantName = plantName
		this.plantType = plantType
		this.plantFamily = plantFamily
		this.garden_id = garden_id

		Plant.all.push(this)
	}

  static renderPlants(){
        Plant.all.forEach(plant => {
            let div = document.createElement("div")
            div.className = "plant"
            div.id =`plant-${plant.id}`
            div.innerHTML = `
            	<h1>${plant.plantName}</h1>
            	<h2>${plant.plantType}</h2>
            	<h3>${plant.plantFamily}</h3>
            `
            main.appendChild(div)
        })

    }

}