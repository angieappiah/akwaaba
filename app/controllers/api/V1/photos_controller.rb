class Api::V1::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render json: @photos, status 200 
    end

    def show
        @photo = Photo.find(params[:id])
        render json: @photo status 200
    end

    def new
        @photo = Photo.new
    end

    def create
        @photo = Photo.create(photos_params)
        render json: @photo status 200
    end

    def update
        @photo = Photo.update(photos_params)
        if @photo.save
            render json: @photo status 200
        else 
            render json {message: "failed"}
        end
    end


    private

    def photos_params
        params.require(:photo).permit(:url, :reviews, :site_id)
    end
end