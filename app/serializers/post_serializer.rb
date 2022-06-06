class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :distance, :time, :pace
  has_one :user
  has_one :tag
end
