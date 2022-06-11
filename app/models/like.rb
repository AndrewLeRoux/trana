class Like < ApplicationRecord
  belongs_to :liked_post, class_name: "Post"
  belongs_to :liked_user, class_name: "User"
end
