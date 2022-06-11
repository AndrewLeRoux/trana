class Comment < ApplicationRecord
  belongs_to :commented_post, class_name: "Post"
  belongs_to :commented_user, class_name: "User"
end
