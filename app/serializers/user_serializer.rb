class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :bio, :featured_image

  def featured_image
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end
end
