class GardenSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :gardenType
  has_many :plants
end
