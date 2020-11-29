class Api::V1::SitesController < ApplicationController
    def index
        @sites = Site.all
        render json: @sites, status: 200
    end

    def show
        @site = Site.find(params[:id])
        render json: @site, status: 200
    end

    def create
        @site = Site.create(site_params)
        render json: @site, status: 200
    end

    def update
        @site = Site.find(params[:id])
        @site.update(site_params)
        render json: @site, status: 200
    end

    def destroy
        @site = Site.find(params[:id])

    end

    private
    def site_params
        params.require (:site).permit(:name, :region, :description, :likes)
    end
end