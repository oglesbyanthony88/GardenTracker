class GardensController < ApplicationController

	def index
		gardens = Garden.all

		render json: GardenSerializer.new(gardens)
	end

	def show
		garden = Garden.find_by(params[:id])

		render json: GardenSerializer.new(garden)
	end

private

	def garden_params
		params.require(:garden).permit(:title, :gardenType)
	end

end
