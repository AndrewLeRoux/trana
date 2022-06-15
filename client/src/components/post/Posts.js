import React, {useState} from "react";
import Post from "./Post";
import styled from "styled-components";

function Posts({posts, user, onPostDelete, setUpdatingPost}) {


  // const [filteredPosts, setFilteredPosts] = useState([])

  // function handleTagClick(tag){
    
  //   const filteredPosts = posts.filter(post => (post.tag.id === tag.id))
  //   const currentTag = tag
  //   setFilteredPosts(filteredPosts)
  //   setCurrentTag(currentTag)
  // }


  return (
    <div>
      {posts.map((post) =>{ return <Post key = {post.id} post={post} user= {user} onPostDelete={onPostDelete} setUpdatingPost={setUpdatingPost}/>})}    
    </div>
  )
}


export default Posts;