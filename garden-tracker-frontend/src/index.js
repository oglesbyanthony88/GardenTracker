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
    newGarden: renderNewGardenForm
}

//calls the render function from Plants
function renderAllPlants(){
	Plant.renderPlants()
}

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
