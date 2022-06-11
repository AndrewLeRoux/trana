class User < ApplicationRecord
    has_secure_password
    has_one_attached :image
    
    has_many :posts, foreign_key: :owner_id

    has_many :comments
    has_many :commented_posts, through: :comments, source: :post

    has_many :likes
    has_many :liked_posts, through: :likes, source: :post

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 5 }
    validates :image, attached: true, content_type: 'image/png'


    

    def image_url
        if image.attached?
            Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
        end
    end

    private

    # def correct_image
    #     if image.attached? == false
    #         errors.add(:image, 'required')
    #     end
    # end
    
end
