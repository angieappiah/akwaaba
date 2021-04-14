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
         <img class="card-img" src="${this.image}" alt="${this.name}">
        <h2 class="card-title">${this.name}</h2>
          <div class="card-content">
             <ul>
                 <li>${this.description}</li>
                 <li>Comments: ${this.reviews}</li>
             </ul>
             <a href="https://dobiison.com/CapeCoastCastle/index.html"> More Details</a>
             <button type='button' value=${this.likes} id=${this.id}>
             ${this.likes} Likes
             
           </button>
          </div>
        </div>`
    }
} 