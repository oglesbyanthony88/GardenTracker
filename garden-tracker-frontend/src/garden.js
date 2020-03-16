class Garden{

	static all = []
	
	constructor({id, title, gardenType}){
		this.id = id
		this.title = title
		this.gardenType = gardenType

		Garden.all.push(this)
	}



	static loadGardens(gardenObj) {
        const plants = gardenObj.relationships.plants.data
        const id = gardenObj.id 
        const { title, gardenType } = gardenObj.attributes
        return new Garden({id, title, gardenType, plants})
    }

    static renderGardens(){
        Garden.all.forEach(garden => {
            let div = document.createElement("div")
            div.className = "garden"
            div.id =`${garden.id}`
            div.innerHTML = `
            	<h1>${garden.title}</h1>
            	<p>${garden.gardenType} Garden</p>
            	<span id="load-plants-${garden.id}">View Plants</span>
            	<span id="new-plant-${garden.id}">Add New Plant</span>
                <div id="plant-field-${garden.id}">
            	</div>
                <div id="new-plant-form-${garden.id}">
                </div>
            `
            main.appendChild(div)
            document.getElementById(`load-plants-${garden.id}`).addEventListener("click", createPlantField)
            document.getElementById(`new-plant-${garden.id}`).addEventListener("click", createNewPlantForm)
            
        })
    }

}