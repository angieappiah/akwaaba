class Api::V1::SitesController < ApplicationController
    def index
        @sites = Site.all
        render json: @sites, :include => {:reviews => {only: :comments}}, :except => [:created_at, :updated_at],  status: 200
    end

    def show
        @site = Site.find(params[:id])
        render json: @site, :include => {:reviews => {only: :comments}}, :except => [:created_at, :updated_at],  status: 200
    end

    def create
        @site = Site.create(site_params)
        @review = Review.create(comments: params["review"]["comments"], site_id: @site.id)
        render json: @site, status: 200
    end

    def update
        @site = Site.find(params[:id])
        @site.update(likes: params["site"]["likes"])
        render json: @site, status: 200
    end

    def destroy
        @site = Site.find(params[:id])
        @site.delete
        render json: {siteId: @site.id}

    end

    private
    def site_params
        params.require(:site).permit(:name, :image, :description, :likes, reviews_attributes: [:comments])
    end
end