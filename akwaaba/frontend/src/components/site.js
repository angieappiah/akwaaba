class Site {
    constructor(siteJSON){
        this.id = siteJSON.id
        this.name = siteJSON.name
        this.region = siteJSON.region
        this.description = siteJSON.description
        this.likes = siteJSON.likes
    }

    renderCard(){
        return `<div class= "card" data-id=${this.id}>
        <h2 class="card-title">${this.name}</h2>
          <div class="card-content">
             <ul>
                 <li>Tag</li>
                 <li>Tag</li>
                 <li>Tag</li>
             </ul>
             <button type='button' value=${this.likes} id=${this.id}>
             ${this.likes} Likes
             <span><i class="fas fa-thumbs-up"></i></span>
           </button>
          </div>
        </div>`
    }
}