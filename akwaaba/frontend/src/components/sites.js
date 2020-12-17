class Sites {
    constructor(){
        this.sites = []
        this.adapter = new SitesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadSites()
    }

    initBindingsAndEventListeners(){
        this.sitesContainer = document.getElementById('sites-container')
        this.newSiteName = document.getElementById('new-site-name')
        this.newSiteDescription = document.getElementById('new-site-description')
        this.newSiteImage = document.getElementById('new-site-image')
        this.newSiteReviews = document.getElementById('new-site-reviews')
        this.SiteForm = document.getElementById('new-site-form')
        this.SiteForm.addEventListener(`submit`, this.createSite.bind(this))
        //this.SiteForm.addEventListener('dblclick', this.handleSiteClick.bind(this)) 
          
    }

    createSite(e){
      e.preventDefault()
      const name = this.newSiteName.value
      const description= this.newSiteDescription.value
      const image = this.newSiteImage.value
      const reviews = this.newSiteReviews.value
      

      this.adapter.createSite(name, description, image, reviews).then(site => {
          this.sites.push(new Site(site))
          this.resetField()
          this.render()
          this.likeListener()
          
      })
       
    }

    // handleSiteClick(e) {
    //   console.log(e.target)
    // }

    fetchAndLoadSites(){
        this.adapter
        .getSites()
        .then(sites => {
            sites.forEach(site => this.sites.push(new Site(site)))
        })
        .then(() => {
            this.render()
            this.likeListener()
        })
    }

    resetField(){
      this.newSiteName.value = ''
      this.newSiteDescription.value = ''
      this.newSiteImage.value = ''
    }

    render(){
       this.sitesContainer.innerHTML = this.sites.map(site => site.renderCard()).join('')

    }

    likeListener(){
        this.buttons = document.getElementsByTagName('button')
        let i = 0;
        for (i = 0; i < this.buttons.length; i++) {
          this.buttons[i].addEventListener("click", this.likeIncrement.bind(this))
        }
    }


  likeIncrement(e) {
    const likes = parseInt(e.target.value)
    const newValue = likes + 1
    const id = parseInt(e.target.id)

    e.target.innerText = `${newValue} Likes`
    e.target.value = newValue

    this.adapter.updateLike(id, newValue)
  }

  
}