Api.fetchPlants()

const parseJSON = response => response.json()
const main = document.getElementById('main')
const menu = document.getElementById('menu')

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

menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event){
    if (event.target.id !== menu){
    	clearWindow()
      callbacks[`${event.target.id}`]()
       // debugger
    }
}

const callbacks= {
    allPlants: renderAllPlants
}

function renderAllPlants(){
	Plant.renderPlants()
}

function clearWindow(){
	document.getElementById("main").innerHTML = ""
}


function clearNewProject() {
    document.querySelector("#select").innerHTML = ""  
}