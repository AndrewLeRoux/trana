class Tag < ApplicationRecord
    has_many :posts
    has_many :owners, through: :posts, source: :user

end
