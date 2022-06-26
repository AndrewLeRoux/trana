import React from "react";
import Post from "./Post";

function Posts({posts, user, likes, comments, onPostDelete, setUpdatingPost, onAddLike, onAddComment}) {

  //reverses order so new posts appear at the top
  const reversedPosts = [...posts].reverse()
  

  return (
    <div>
      {reversedPosts.map((post) =>{ return <Post key = {post.id} post={post} user= {user} likes = {likes} comments = {comments} onPostDelete={onPostDelete} setUpdatingPost={setUpdatingPost} onAddLike={onAddLike} onAddComment = {onAddComment} />})}    
    </div>
  )
}


export default Posts;