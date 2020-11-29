# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Site.create([
  {name: "boti", region: "eastern", description: "twin waterfall", likes: "5"},
  {name: "cape coast castle", region: "central", description: " A historical slave museum with a Ghanaian arts and crafts gift", likes: "20"},
  {name: "Mole National Park", region: "Northern", description: "Large and commonly seen mammals including elephant, kob, roan antelope, hartebeest, waterbuck, bushbuck, warthog, buffalo, several duikers, baboon, patas and green (vervet) monkeys", likes: "10"},
])

Photos.create([
    {url: "https://touringghana.com/wp-content/uploads/2016/03/boti-falls.jpg", reviews: "so much fun"}, 
    {url: "https://touringghana.com/wp-content/uploads/2016/03/cape-coast-castle2.jpg", reviews: "beautiful museum with lots of arts"},
    {url: "https://touringghana.com/wp-content/uploads/2016/03/mole.jpg", reviews: "a wonderful site to behold"}, 
])