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
            div.id =`garden-${garden.id}`
            div.innerHTML = `
            	<h1>${garden.title}</h1>
            	<p>${garden.gardenType} Garden</p>
            	<span class="load-plants" id=${garden.id}>View Plants</span>
            	<div id="plant-field-${garden.id}">
            	</div>
            `
            main.appendChild(div)
            document.getElementById(`${garden.id}`).addEventListener("click", Api.createPlantField)
        })
    }

}