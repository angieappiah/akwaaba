# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sites = [
  {name: "CAPE COAST CASTLE",
   region: "Central Region",
   description: "The historic Slave Building",
   likes: "5",
   image:  "https://www.easytrackghana.com/images/photos/cape-coast-castle-gun-arrange.jpg"
    },


  {name: "The Slave Museum",
  region: "Central Region",
  description: " A historical slave museum with Ghanaian arts and crafts", 
  likes: "20",
  image:"https://www.easytrackghana.com/images/photos/cape-coast-castle-from-beach.jpg"
}
]

sites.each do |site|
  Site.create(name: site[:name], region: site[:region], description: site[:description], image: site[:image], likes: site[:likes])
end