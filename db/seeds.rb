# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create([
  {name: "CAPE COAST CASTLE",
   description: "Follow the slave route to Cape Coast, visiting a memorial at the Slave River. 
   Tour Cape Coast castle and contemplate the history of this beach",
   likes: "5",
   image:  "https://www.easytrackghana.com/images/photos/cape-coast-castle-gun-arrange.jpg",
   reviews_attributes: [comments: "a site to behold"]
    },


  {name: "The Slave Museum",
  description: " 	
  The former slave dungeon at Cape Coast castle is a UNESCO World Heritage site commemorating a sad history inflicted on Africa,
  and Ghana in particular. Those of African descent may have a Door of Return ceremony here and this tour
  also permits a visit to a Posuban Shrine and a pineapple farm or a chapel square.", 
  likes: "20",
  image:"https://www.easytrackghana.com/images/photos/cape-coast-castle-from-beach.jpg",
  reviews_attributes: [comments: "a beautiful place"]
}
])

#site_a = Site.create()