// initial fetch for plants
Api.fetchPlants()

// setting up some variables
const parseJSON = response => response.json()
const main = document.getElementById('main')
const menu = document.getElementById('menu')

// renders Garden Cards on page load.
document.addEventListener("DOMContentLoaded", () => {
    Api.fetchGardens()
    .then(resObj => {
        resObj.data.forEach(garden => {
            Garden.loadGardens(garden)
        })
    })
    .then(() => {
        Garden.renderGardens()
    }) 
})

// adds click listeners to all spans in div.menu
menu.addEventListener('click', handleMenuClick)

// handles menu clicks + clears page to declutter
function handleMenuClick(event){
    if (event.target.id !== menu){
    	clearWindow()
      callbacks[`${event.target.id}`]()
       // debugger
    }
}

// connects html span id to functions associated with handleMenuClick
const callbacks= {
    allPlants: renderAllPlants,
    newGarden: renderNewGardenForm,
    allGardens: Garden.renderGardens
}

//calls the render function from Plants
function renderAllPlants(){
    console.log('working')
	Plant.renderPlants()
}

// calls render garden
function renderAllGardens(){
	Garden.renderGardens()
}

// clears window to declutter
function clearWindow(){
	document.getElementById("main").innerHTML = ""
}

// renders a new form for garden
function renderNewGardenForm(){
	main.appendChild(gFormDiv)
}
// setting up new garden form
const gFormDiv = document.createElement('div')
gFormDiv.className = "new-garden"
	gFormDiv.innerHTML = `
		<h2>New Garden</h2>
		Garden Title:
		<input id="garden" type="text"/>
		<br><br>
		Garden Type:
		<input id="garden" type="text"/>
		<br>
		<p>i.e.(Vegetable, Flower, Mixed, etc)</p>
		<br><br>
		<span id="garden-submit">Add Garden</span>
	`
// adds listener for new garden submit button
gFormDiv.addEventListener('click', handleFormSubmit)

// creates new Garden using Api.newGarden
function handleFormSubmit(event){
    if (event.target.id == "garden-submit"){
    	let gardenInput = gFormDiv.querySelectorAll('input#garden')

    	let newGardenObj = {
    		title: gardenInput[0].value,
    		gardenType: gardenInput[1].value
    	}
    	Api.newGarden(newGardenObj)
    	location.reload()
    }
}

// clears all div#plant-fields
function clearDivPlantField(){
    let divs = document.querySelectorAll('[id^="plant-field-"]')
    divs.forEach(function(div){
        div.innerHTML = ''
    })   
}

// clears all div#new-plants-forms
function clearDivNewPlantForm(){
    let divsP = document.querySelectorAll('[id^="new-plant-form-"]')
    divsP.forEach(function(div){
        div.innerHTML = ''
    }) 
}

// when add plant button pushed in garden card expands list of plants.
function createPlantField(e){
        clearDivNewPlantForm()
        clearDivPlantField()
        let targetGardenId = parseInt(e.target.parentNode.id)
        let plantField = document.querySelector(`#plant-field-${targetGardenId}`)
        let gardenPlantsArr = Plant.all.filter(plant => plant.garden_id === targetGardenId)
        let gardenPlants = ''
        for (const plant of gardenPlantsArr){
            gardenPlants += createIndividualPlant(plant)
        }
        plantField.innerHTML += gardenPlants

}
// html node for plants
function createIndividualPlant(plant){
    return `<div class="plant" plant-id="plant.id">
                <li>${plant.plantName}</li>
                <li>${plant.plantType}</li>
            </div>
           `
}


// creates new plant form for new plant button
function createNewPlantForm(e){
        clearDivPlantField()
        clearDivNewPlantForm()
        let targetGardenId = parseInt(e.target.parentNode.id)
        let newPlantField = document.querySelector(`#new-plant-form-${targetGardenId}`)
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
            <span class="plant-submit" id="${targetGardenId}">Submit</span>
        `
        let plantSubmit = document.querySelector(`.plant-submit`)
        plantSubmit.addEventListener("click", handleNewPlantSubmit)
}

// Handles what to do when new plant is submited
function handleNewPlantSubmit(e){
        let targetFormId = parseInt(e.target.id)
        let newPlantField = document.querySelector(`#new-plant-form-${targetFormId}`)
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




