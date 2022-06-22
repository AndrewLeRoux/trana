class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    comment = comments.find(params[:id])
    render json: comment
  end

  # POST /comments
  def create
    @comment = @current_user.comments.create!(comment_params)
    render json: @comment, status: :created, location: @comment
  end

  # PATCH/PUT /comments/1
  def update
    @comment.update!(comment_params)
    render json: @comment
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = @current_user.comments.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:commented_post_id)
    end
end
