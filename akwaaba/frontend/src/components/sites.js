class Sites {
    constructor(){
        this.sites = []
        this.adapter = new SitesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadSites()
    }

    initBindingsAndEventListeners(){
        this.siteContainer = document.getElementById('site-container')
        this.newSiteName = document.getElementById('new-site-form')
        this.newSiteName = document.addEventListener(`submit`, this.createSite.bind(this))
    }

    createSite(e){
        e.preventDefault()
        console.log ('didi')
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
       this.siteContainer.innerHTML = this.sites.map(site => site.renderLi()).join('')

    }
}