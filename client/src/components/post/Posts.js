import React from "react";
import Post from "./Post";

function Posts({posts, user, likes, comments, onPostDelete, setUpdatingPost, onAddLike, onAddComment}) {


  // const [filteredPosts, setFilteredPosts] = useState([])

  // function handleTagClick(tag){
    
  //   const filteredPosts = posts.filter(post => (post.tag.id === tag.id))
  //   const currentTag = tag
  //   setFilteredPosts(filteredPosts)
  //   setCurrentTag(currentTag)
  // }


  return (
    <div>
      {posts.map((post) =>{ return <Post key = {post.id} post={post} user= {user} likes = {likes} comments = {comments} onPostDelete={onPostDelete} setUpdatingPost={setUpdatingPost} onAddLike={onAddLike} onAddComment = {onAddComment} />})}    
    </div>
  )
}


export default Posts;