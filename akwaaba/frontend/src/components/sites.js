class Sites {
    constructor(){
        this.sites = []
        this.adapter = new SitesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadSites()
    }

    initBindingsAndEventListeners(){
        this.siteContainer = document.getElementById('site-container')
        this.newSiteName = document.getElementById('new-site-name')
        this.newSiteRegion = document.getElementById('new-site-region')
        this.newSiteDescription = document.getElementById('new-site-description')
        this.newSitePhoto = document.getElementById('new-site-photo')
        this.SiteForm = document.getElementById('new-site-form')
        this.SiteForm.addEventListener(`submit`, this.createSite.bind(this))
    }

    createSite(e){
      e.preventDefault()
      const name = this.newSiteName.value
      const region = this.newSiteRegion.value
      const description= this.newSiteDescription.value
      const photo = this.newSitePhoto.value
      

      this.adapter.createSite(name, region, description, photo).then(site => {
          this.sites.push(new Site(site))
          this.render()
          this.likeListener()
      })
       
    }

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

    render(){
       this.siteContainer.innerHTML = this.sites.map(site => site.renderCard()).join('')

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