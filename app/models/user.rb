class User < ApplicationRecord
    has_secure_password
    has_one_attached :featured_image
    
    has_many :posts, foreign_key: :owner_id

    has_many :comments, foreign_key: :user_comment_id
    has_many :commented_posts, through: :comments, source: :post

    has_many :likes, foreign_key: :user_like_id
    has_many :liked_posts, through: :likes, source: :post

end
