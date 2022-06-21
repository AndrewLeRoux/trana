import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Tile from "../styles/Tile"

function Post({post, user, onPostDelete, setUpdatingPost}) {

    let history = useHistory();

    let myPost = false
    
    if (post.user_id === user.id){
        myPost = true
    }

    const postId = post.id

    const mins = Math.floor(post.pace)
    let secs = Math.round((post.pace - mins)*60)
    if (secs === 0){
        secs = '00'
    }

    const date = new Date(post.created_at)
    

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
            <Div>
            <div>
            <img src={post.owner.image_url} alt= "owner" width = "40px" height = "40px"></img>
            <br/>
            <Strong>{post.tag.name}</Strong>
            </div>
            <Details>
                <h2><strong>{post.owner.name}</strong></h2>
                <p>{date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()} at {date.getHours()}:{date.getMinutes()}</p>
                <strong>{post.name}</strong>
                <p>{post.description}</p>
                <>
                Distance: {post.distance} <Divide>|</Divide> Pace: {mins}:{secs} mins / mile
                </>
            </Details>
            </Div>
            <div>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            </div>
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

const Divide = styled.span`
    font-size: 30px;
`;

const Details = styled.div`
    text-align: left;
    margin-left: 25px;
`;

const Div = styled.div`
    display: flex;
    margin: auto;
    width: 50%;
`;

const Strong = styled.strong`

`;

export default Post;