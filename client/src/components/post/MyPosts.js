import React from "react";
import Post from "./Post";


function MyPosts({posts, user, likes, comments, onPostDelete, setUpdatingPost, onAddLike, onAddComment}) {

  return (
    <div>
      {posts.filter(post => (post.user_id === user.id)).map((post) =>{ return <Post key = {post.id} post={post} user= {user} likes = {likes} comments = {comments} onPostDelete={onPostDelete} setUpdatingPost={setUpdatingPost} onAddLike={onAddLike} onAddComment = {onAddComment}/>})}
    </div>
  )
}


export default MyPosts;