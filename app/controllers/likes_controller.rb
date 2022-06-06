class LikesController < ApplicationController
  before_action :set_like, only: [:show, :update, :destroy]

  # GET /likes
  def index
    @likes = @current_user.likes

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @like
  end

  # POST /likes
  def create
    @like = @current_user.likes.create!(like_params)
    render json: @like, status: :created, location: @like
  end

  # PATCH/PUT /likes/1
  def update
    @like.update!(like_params)
    render json: @like
  end

  # DELETE /likes/1
  def destroy
    @like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = @current_user.likes.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def like_params
      params.require(:like).permit(:user_id, :post_id)
    end
end
