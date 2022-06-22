class LikeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :liked_user
  has_one :liked_post
end
