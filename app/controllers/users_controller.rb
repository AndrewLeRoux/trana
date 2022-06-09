class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def show
    render json: @current_user
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    @current_user.image.purge
    @current_user.update!(user_params)
    render json: @current_user
  end

    # DELETE /users/1
  def destroy
    @current_user.destroy
  end

  private
    
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :username, :password, :password_confirmation, :bio, :image)
    end
end
