class Post < ApplicationRecord
  has_one_attached :image

  belongs_to :owner, class_name: "User"
  belongs_to :tag

  has_many :comments
  has_many :commented_users, through: :comments, source: :user

  has_many :likes
  has_many :liked_users, through: :likes, source: :user

  # has_many :likes
  # has_many :likers, through: :likes, 
  # validates :image, attached: true, content_type: 'image/png'


  def image_url
      if image.attached?
          Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
      end
  end

end
