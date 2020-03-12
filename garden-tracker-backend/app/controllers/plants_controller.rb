class PlantsController < ApplicationController

	def index
		plants = Plant.all

		render json: PlantSerializer.new(plants)
	end

private

	def plant_params
		params.require(:plant).permit(:plantName, :plantType, :plantFamily, :garden_id)
	end


end
