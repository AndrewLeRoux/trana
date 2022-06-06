class Post < ApplicationRecord
  belongs_to :owner, class_name: “User”
  belongs_to :tag

  has_many :comments, foreign_key: :commented_post_id
  has_many :commented_users, through: :comments, source: :user

  has_many :likes, foreign_key: :liked_post_id
  has_many :liked_users, through: :likes, source: :user

end
