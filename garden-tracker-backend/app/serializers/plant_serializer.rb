class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :garden_id, :id, :plantName, :plantType, :plantFamily 
  belongs_to :garden
end
