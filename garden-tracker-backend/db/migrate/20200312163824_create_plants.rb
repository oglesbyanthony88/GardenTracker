class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :plantFamily
      t.string :plantType
      t.string :plantName
      t.references :garden

      t.timestamps
    end
  end
end
