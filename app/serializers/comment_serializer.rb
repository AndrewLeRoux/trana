class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :commented_user_id, :commented_post_id
  has_one :commented_user, serializer: CommentUserSerializer
  has_one :commented_post

  
end
