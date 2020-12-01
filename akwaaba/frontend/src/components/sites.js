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
            console.log(sites)
        })
    }
}