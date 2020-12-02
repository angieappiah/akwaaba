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
            console.log(sites)
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const siteContainer = document.getElementById('site-container')
        siteContainer.innerHTML = 'Top 10'

    }
}