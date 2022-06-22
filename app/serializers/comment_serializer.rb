class CommentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :commented_user
  has_one :commented_post
end
