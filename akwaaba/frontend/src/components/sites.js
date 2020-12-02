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
           return console.log(sites)
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