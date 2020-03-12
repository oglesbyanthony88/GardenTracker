class Garden{

	static all = []
	
	constructor(id, title, gardenType){
		this.id = id
		this.title = title
		this.gardenType = gardenType
	
		Garden.all.push(this)
	}

}