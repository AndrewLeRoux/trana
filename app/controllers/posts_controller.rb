class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: ['tag', 'owner']
  end

  # GET /posts/1
  def show
    render json: @post, include: ['tag', 'owner']
  end

  # POST /posts
  def create
    @post = @current_user.posts.create!(post_params)
    render json: @post, status: :created, location: @post, include: ['tag', 'owner']
  end

  # PATCH/PUT /posts/1
  def update
    @post.update!(post_params)
    render json: @post, include: ['tag', 'owner']
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = @current_user.posts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:name, :description, :distance, :hours, :minutes, :seconds, :pace, :tag_id, :image)
    end
end
