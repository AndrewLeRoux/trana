import React from "react";
import Post from "./Post";


function MyPosts({posts, user, onPostDelete, setUpdatingPost}) {

  return (
    <div>
      {posts.filter(post => (post.user_id === user.id)).map((post) =>{ return <Post key = {post.id} post={post} user= {user} onPostDelete={onPostDelete} setUpdatingPost={setUpdatingPost}/>})}
    </div>
  )
}


export default MyPosts;