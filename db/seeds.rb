# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create([
  {name: "CAPE COAST CASTLE",
   region: "Central Region",
   description: "The historic Slave Building",
   likes: "5",
   photos_attributes: [url:  "https://touringghana.com/wp-content/uploads/2016/02/h1.jpg"]
    },


  {name: "The Slave Museum",
  region: "Central Region",
  description: " A historical slave museum with Ghanaian arts and crafts", 
  likes: "20",
  photos_attributes: [url:"https://touringghana.com/wp-content/uploads/2016/03/cape-coast-castle2.jpg"]
}
])

# Photo.create([
#     {url: "https://touringghana.com/wp-content/uploads/2016/03/boti-falls.jpg", reviews: "so much fun"}, 
#     {url: "https://touringghana.com/wp-content/uploads/2016/03/cape-coast-castle2.jpg", reviews: "beautiful museum with lots of arts"},
#     {url: "https://touringghana.com/wp-content/uploads/2016/03/mole.jpg", reviews: "a wonderful site to behold"}, 
# ])