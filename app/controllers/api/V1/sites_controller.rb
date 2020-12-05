class Api::V1::SitesController < ApplicationController
    def index
        @sites = Site.all
        render json: @sites, :include => {:photos => {only: :url}}, :except => [:created_at, :updated_at],  status: 200
    end

    def show
        @site = Site.find(params[:id])
        render json: @site, :include => {:photos => {only: :url}}, :except => [:created_at, :updated_at],  status: 200
    end

    def create
        @site = Site.create(site_params)
        @photo = Photo.new(url: params["photo"]["url"], site_id: @site_id)
        @photo.save
        render json: @site, :include => {:photos => {only: :url}}, :except => [:created_at, :updated_at],  status: 200
    end

    def update
        @site = Site.find(params[:id])
        @site.update(site_params)
        render json: @site, status: 200
    end

    def destroy
        @site = Site.find(params[:id])
        @site.delete
        render json: {siteId: @site.id}

    end

    private
    def site_params
        params.require(:site).permit(:name, :region, :description, :likes, photos_attributes: [:url])
    end
end