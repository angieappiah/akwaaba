class SiteSerializer < ActiveModel::Serializer
    has_many :photos
    attributes :name, :region, :description, :likes, :updated_at, :created_at

end