import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


function Post({post, user, favorites, onAddFavorite, onPostDelete, onPostUpdate}) {

    const postId = post.id

    let history = useHistory();

    let myPost = false


    if (post.user_id === user.id){
        myPost = true
    }


    function addToFavorites () {
        if (favorites.find(favorite => favorite.post_id === post.id && favorite.user_id === user.id)) {
            alert("already in favorites")
         }
         else {
            fetch("/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    post_id: post.id
                }),
            })
            .then((r) => r.json())
            .then((newFavorite) => onAddFavorite(newFavorite));    
         }
            
    }

    function deletePost() {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then(() => onPostDelete(postId));
    }

    function updatePost() {
        onPostUpdate(post)
        history.push("/update_post");
    }


    

    return (
        <Wrapper>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p><strong>Tag: </strong> {post.tag.name}</p>
            <p><strong>Creator: </strong> {post.user.username}</p>
            <p><strong>Contact information: </strong> {post.user.phone_number}</p>
            <Button onClick = {addToFavorites}>favorite</Button>
            {myPost? 
            <>
            <Button onClick = {deletePost}>delete post</Button>
            <Button onClick = {updatePost}>update post</Button>
            </>
            : 
            ''}
        </Wrapper>
    )
}

const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: green;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: #61fb78;
  margin-left: 30px;
  margin-right: 30px;
  color: black;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-style: solid outset;
  border-color: green;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 40px;
`;



export default Post;