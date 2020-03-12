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
}