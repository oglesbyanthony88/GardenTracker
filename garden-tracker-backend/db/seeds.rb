# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Garden.create([{title: "Veggie Garden", gardenType: "Vegetable"}, #1
							 {title: "Flowers for Al", gardenType: "Flower"}, #2
							 {title: "Strawberry Fields", gardenType: "Fruit"}, #3
							 {title: "Garden of Eden", gardenType: "Mixed"}]) #4

Plant.create([{plantFamily: "Fruit", plantType: "Tomato", plantName: "Beefsteak", garden_id: 1},
							{plantFamily: "Vegetable", plantType: "Pumpkin", plantName: "Sweet Sugar Pie", garden_id: 1},
							{plantFamily: "Legume", plantType: "Bean", plantName: "Pinto", garden_id: 1},
							{plantFamily: "Tuber", plantType: "Turnip", plantName: "Tokinashi", garden_id: 1},
							{plantFamily: "Flower", plantType: "Tulip", plantName: "Parrot", garden_id: 2},
							{plantFamily: "Flower", plantType: "Sunflower", plantName: "Autumn Beauty", garden_id: 2},
							{plantFamily: "Flower", plantType: "Daisy", plantName: "Blue Disc African", garden_id: 2},
							{plantFamily: "Flower", plantType: "Dandelion", plantName: "Japanese White", garden_id: 2},
							{plantFamily: "Fruit", plantType: "Melon", plantName: "Pepino", garden_id: 3},
							{plantFamily: "Fruit", plantType: "Berry", plantName: "Temptation Strawberry", garden_id: 3},
							{plantFamily: "Fruit", plantType: "Melon", plantName: "Tzimbalo Melon Pear", garden_id: 3},
							{plantFamily: "Fruit", plantType: "Melon", plantName: "Mango Melon", garden_id: 3},
							{plantFamily: "Fruit", plantType: "Tomato", plantName: "Beefsteak", garden_id: 4},
							{plantFamily: "Legume", plantType: "Bean", plantName: "Pinto", garden_id: 4},
							{plantFamily: "Flower", plantType: "Tulip", plantName: "Parrot", garden_id: 4},
							{plantFamily: "Vegetable", plantType: "Pumpkin", plantName: "Sweet Sugar Pie", garden_id: 4}])

