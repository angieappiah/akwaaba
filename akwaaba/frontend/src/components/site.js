class Site {
    constructor(siteJSON){
        this.id = siteJSON.id
        this.name = siteJSON.name
        this.region = siteJSON.region
        this.description = siteJSON.description
        this.image = siteJSON.image
        this.likes = siteJSON.likes
        this.reviews = siteJSON.reviews[0].comments
        //this.photos = siteJSON.photos.url
        // if (siteJSON.photos.length > 0 ){
             //this.photo = siteJSON.photos[0].url
           
        // }
        // else {
        //     this.photo = "https://touringghana.com/wp-content/uploads/2016/03/volta-lake.jpg"
        // }

        
    }


    renderCard(){
        return `<div class= "card" data-id=${this.id}>
        <h2 class="card-title">${this.name}</h2>
        <img class="card-img" src="${this.image}" alt="${this.name}">
          <div class="card-content">
             <ul>
                 <h3>${this.region}</h3>
                 <h4>${this.description}</h4>
                 <h4>Comments: ${this.reviews}</h4>
                 
             </ul>
             <a href="https://dobiison.com/CapeCoastCastle/index.html"> More Details</a>
             <button type='button' value=${this.likes} id=${this.id}>
             ${this.likes} Likes
             
           </button>
          </div>
        </div>`
    }
}