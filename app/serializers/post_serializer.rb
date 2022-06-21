class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :distance, :hours, :minutes, :seconds, :pace, :image, :image_url, :created_at
  has_one :owner, serializer: PostOwnerSerializer
  has_one :tag
end
