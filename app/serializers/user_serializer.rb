class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :username, :bio, :image, :image_url

  # def image
  #   if image.attached?
  #     {
  #       url: rails_blob_url(image)
  #     }
  #   end
  # end

end
