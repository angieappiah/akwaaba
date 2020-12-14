class SitesAdapter {
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/sites'
    }

    getSites() {
        return fetch(this.baseUrl).then(res => res.json()
        )
      
    } 

    createSite(name, region, description, image, review){
        const site = {
         name: name,
         region: region,
         image: image,
         description: description,
         review: {comments: review}
        //  photo: {
        //     url: photo
        //   }
        }
       
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify(site)
        }).then(res => res.json())
    }

    updateLike(id, newValue) {
        const site = {
          likes: newValue,
        }
    
        return fetch(`${this.baseUrl}/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ site }),
        }).then(res => res.json())
    }


}