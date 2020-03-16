class PlantsController < ApplicationController

	def index
		plants = Plant.all
		plants = plants.uniq{|e| [e.plantName]}

		render json: PlantSerializer.new(plants)
	end

	def create
		newPlant = Plant.new(plant_params)
		
		newPlant.save
		render json: PlantSerializer.new(newPlant)	
	end

private

	def plant_params
		params.require(:plant).permit(:garden_id, :plantName, :plantType, :plantFamily)
	end


end
