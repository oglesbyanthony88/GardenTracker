class PlantsController < ApplicationController

	def index
		plants = Plant.all

		render json: PlantSerializer.new(plants)
	end

	def create
		garden = Garden.find_by(params[:id])
		newPlant = garden.plants.build(plant_params)
		newPlant.save
		render json: PlantSerializer.new(newPlant)
	end

private

	def plant_params
		params.require(:plant).permit(:garden_id, :plantName, :plantType, :plantFamily)
	end


end
