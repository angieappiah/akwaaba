class Site {
    constructor(siteJSON){
        this.id = siteJSON.id
        this.name = siteJSON.name
        this.region = siteJSON.region
        this.description = siteJSON.description
        this.likes = siteJSON.likes
        if (siteJSON.photos.length > 0 ){
            this.photo = siteJSON.photos[0].url
        }
        else {
            this.photo = "https://touringghana.com/wp-content/uploads/2016/03/volta-lake.jpg"
        }

        
    }


    renderCard(){
        return `<div class= "card" data-id=${this.id}>
        <h2 class="card-title">${this.name}</h2>
        <img class="card-img" src="${this.photo}" alt="${this.name}">
          <div class="card-content">
             <ul>
                 <h3>${this.region}</h3>
                 <h4>${this.description}</h4>
             </ul>
             <a href="https://dobiison.com/CapeCoastCastle/index.html"> More Details</a>
             <button type='button' value=${this.likes} id=${this.id}>
             ${this.likes} Likes
             <span><i class="fas fa-thumbs-up"></i></span>
           </button>
          </div>
        </div>`
    }
}