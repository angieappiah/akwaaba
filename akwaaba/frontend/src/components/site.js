class Site {
    constructor(siteJSON){
        this.id = siteJSON.id
        this.name = siteJSON.name
        this.description = siteJSON.description
        this.image = siteJSON.image
        this.likes = siteJSON.likes
        this.reviews = siteJSON.reviews[0].comments
        // if (siteJSON.reviews.length > 0 ){
        //      this.review = siteJSON.reviews[0].comments  
        // }
        // else {
        //     this.review = "No reviews yet!"
        //  }

        
    }


    renderCard(){
        return `<div class= "card" data-id=${this.id}>
        <h2 class="card-title">${this.name}</h2>
        <img class="card-img" src="${this.image}" alt="${this.name}">
          <div class="card-content">
             <ul>
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