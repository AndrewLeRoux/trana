class Like < ApplicationRecord
  belongs_to :liked_post, class_name: “post”
  belongs_to :liked_user, class_name: “user”
end
