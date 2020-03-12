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
    allPlants: renderAllPlants
}

//calls the render function from Plants
function renderAllPlants(){
	Plant.renderPlants()
}

// clears window to declutter
function clearWindow(){
	document.getElementById("main").innerHTML = ""
}
