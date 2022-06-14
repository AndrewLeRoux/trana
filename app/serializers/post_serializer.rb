class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :distance, :time, :pace, :image, :image_url
  has_one :user
  has_one :tag
end
