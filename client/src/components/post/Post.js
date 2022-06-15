import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Tile from "../styles/Tile"

function Post({post, user, onPostDelete, setUpdatingPost}) {

    const postId = post.id

    let history = useHistory();

    let myPost = false


    if (post.user_id === user.id){
        myPost = true
    }


    // function addToFavorites () {
    //     if (favorites.find(favorite => favorite.post_id === post.id && favorite.user_id === user.id)) {
    //         alert("already in favorites")
    //      }
    //      else {
    //         fetch("/favorites", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 post_id: post.id
    //             }),
    //         })
    //         .then((r) => r.json())
    //         .then((newFavorite) => onAddFavorite(newFavorite));    
    //      }
            
    // }

    function deletePost() {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then(() => onPostDelete(postId));
    }

    function onSetUpdatingPost() {
        setUpdatingPost(post)
        history.push("/update_post");
    }


    return (
        <Tile>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p><strong>Tag: </strong> {post.tag.name}</p>
            <p><strong>User: </strong>{post.owner.name}</p>
            <p>Pace: {post.pace}</p>
            {myPost? 
            <>
            <Button onClick = {deletePost}>delete post</Button>
            <Button onClick = {onSetUpdatingPost}>update post</Button>
            </>
            : 
            ''}
        </Tile>
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



export default Post;