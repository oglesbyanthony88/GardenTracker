class Garden{

	static all = []
	
	constructor({id, title, gardenType}){
		this.id = id
		this.title = title
		this.gardenType = gardenType

		Garden.all.push(this)
	}


// loads garden for use to render gardens on load
	static loadGardens(gardenObj) {
        const plants = gardenObj.relationships.plants.data
        const id = gardenObj.id 
        const { title, gardenType } = gardenObj.attributes
        return new Garden({id, title, gardenType, plants})
    }

// renders garden cards
    static renderGardens(){
/*
In order to alphabatize the object array I had to call sort on Garden and stor it in a new variable.
Sort used an anonymous function to take in two variables in Garden.all
This function then lowercases the titles of each varible and then compares them.
If title A comes after title B then title a is moved to the end
If title A comes before title B then it is moved to the front.
if neither if statements are true then title A does not move.
*/ 

        let alphaGarden = Garden.all.sort(function(a ,b){
            let titleA = a.title.toLowerCase() 
            let titleB = b.title.toLowerCase()
                if (titleA < titleB)
                    return -1
                if (titleA > titleB)
                    return 1
                return 0
        });
        alphaGarden.forEach(garden => {
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