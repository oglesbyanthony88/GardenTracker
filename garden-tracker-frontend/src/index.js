// Api.fetchGardens();
Api.fetchPlants();

const parseJSON = response => response.json()
const main = document.getElementById('main')
const menu = document.getElementById('menu')

// window.addEventListener('load', (e) => {
// 	console.log('doing the thing');
// 	renderGardenCards()
// })

// function renderGardenCards(){
// 	Garden.all.forEach(garden => {
// 		main.appendChild(garden.fullRender())
// 	})
// }

document.addEventListener("DOMContentLoaded", () => {
    Api.fetchGardens()
    .then(resObj => {
        resObj.data.forEach(garden => { 
            Garden.loadGarden(garden)
        })
    })
    .then(() => {
        Garden.renderGardens()
    }) 
  })