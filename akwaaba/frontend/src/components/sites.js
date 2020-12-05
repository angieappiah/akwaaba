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
        this.SiteForm = document.getElementById('new-site-form')
        this.SiteForm.addEventListener(`submit`, this.createSite.bind(this))
    }

    createSite(e){
      e.preventDefault()
      const name = this.newSiteName.value
      const region = this.newSiteRegion.value
      const description= this.newSiteDescription.value
      

      this.adapter.createSite(name, region, description).then(site => {
          this.sites.push(new Site(site))
          this.render()
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
        })
    }

    render(){
       this.siteContainer.innerHTML = this.sites.map(site => site.renderCard()).join('')

    }
}