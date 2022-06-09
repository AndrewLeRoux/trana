class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name, :username, :bio, :image_url, :image

end
