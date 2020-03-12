class PlantsController < ApplicationController

	def index
		plants = Plants.all

		render json: PlantsSerializer.new(plants)
	end

private

	def plant_params
		params.require(:plant).permit(:plantName, :plantType, :plantFamily, :garden_id)
	end


end
