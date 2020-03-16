class GardensController < ApplicationController

	def index
		gardens = Garden.all

		render json: GardenSerializer.new(gardens)
	end

	def show
		garden = Garden.find(params[:id])

		render json: GardenSerializer.new(garden)
	end

	def create
		newGarden = Garden.create(garden_params)
		
		render json: GardenSerializer.new(newGarden)
	end

private

	def garden_params
		params.require(:garden).permit(:title, :gardenType)
	end

end
