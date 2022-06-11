class Post < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: :user_id
  belongs_to :tag

  has_many :comments
  has_many :commented_users, through: :comments, source: :user

  has_many :likes
  has_many :liked_users, through: :likes, source: :user

  

end
