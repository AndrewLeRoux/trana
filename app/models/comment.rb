class Comment < ApplicationRecord
  belongs_to :commented_post, class_name: “post”
  belongs_to :commented_user, class_name: “user”
end
