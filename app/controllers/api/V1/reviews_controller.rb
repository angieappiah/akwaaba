class Api::V1::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render json: @reviews, status 200 
    end

    def show
        @review = Review.find(params[:id])
        render json: @review status 200
    end

    def new
        @review = Review.new
    end

    def create
        @review = Review.create(reviews_params)
        render json: @review status 200
    end

    private

    def reviews_params
        params.require(:review).permit(:comments, :site_id)
    end
end
