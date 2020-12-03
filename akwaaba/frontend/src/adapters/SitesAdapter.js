class SitesAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/sites'
    }

    getSites() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    } 

    createSite(name, region, description){
        const site = {
         name: name,
         region: region,
         description: description
        }
       
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify(site)
        }).then(res => res.json())
    }

}