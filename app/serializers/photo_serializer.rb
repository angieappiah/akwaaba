class PhotoSerializer < ActiveModel::PhotoSerializer
  belongs_to :site
  attributes :url, :site_id, :reviews, :updated_at, :created_at
end