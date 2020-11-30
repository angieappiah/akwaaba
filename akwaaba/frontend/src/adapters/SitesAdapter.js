class SiteAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/api/v1/sites'
    }

    getSites(){
        return fetch(this.baseUrl).then(res => res.json()
        )
    } 
}