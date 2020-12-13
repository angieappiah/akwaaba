class ReviewSerializer < ActiveModel::ReviewSerializer
  belongs_to :site
  attributes :comment, :site_id, :updated_at, :created_at
end