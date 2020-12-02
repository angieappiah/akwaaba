class Site {
    constructor(siteJSON){
        this.id = siteJSON.id
        this.name = siteJSON.name
        this.region = siteJSON.region
        this.description = siteJSON.description
        this.likes = siteJSON.likes
    }

    renderLi(){
        return `<li>${this.name}</li>`
    }
}