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

const SubTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`

const TagsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;


const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: green;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;

export default Posts;