class Sites {
    constructor(){
        this.sites = []
        this.adapter = new SitesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadSites()
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
        const siteContainer = document.getElementById('site-container')
        siteContainer.innerHTML = this.sites.map(site => ` <li>${site.name}</li>`).join('')

    }
}