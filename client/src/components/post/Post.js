import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Tile from "../styles/Tile"


function Post({post, user, likes, comments, onPostDelete, setUpdatingPost, onAddLike, onAddComment}) {

    const [commentSection, setCommentSection] = useState(false)

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
    

    console.log(post.likes)
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

    function likePost() {

        const formData = new FormData()
        formData.append('liked_post_id', post.id)

        fetch("/likes", {
                method: "POST",
                body: formData
            })
            .then((r) => r.json())
            .then((newlike) => onAddLike(newlike)); 
    }

    // function commentOnPost(){

    //     const formData = new FormData()
    //     formData.append('commented_post_id', post.id)

    //     fetch("/comments", {
    //         method: "POST",
    //         body: formData
    //     })
    //     .then((r) => r.json())
    //     .then((newComment) => onAddComment(newComment)); 
    // }

    function handleCommentSection() {
        const bool = !commentSection
        setCommentSection(bool)
    }

    return (
        <Tile>
            <Container>
            <Div>
            <div>
            <img src={post.owner.image_url} alt= "owner" width = "40px" height = "40px"></img>
            <br/>
            <strong>{post.tag.name}</strong>
            </div>
            <Details>
                <h2><strong>{post.owner.name}</strong></h2>
                <>{date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()} at {date.getHours()}:{date.getMinutes()}</>
                <SubDetails>
                <Strong>{post.name}</Strong>
                <p>{post.description}</p>
                <>
                Distance: {post.distance} <Divide>|</Divide> Pace: {mins}:{secs} mins / mile
                </>
                </SubDetails>
            </Details>
            </Div>
            <div>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            </div>
            <Div2>
                <div>
                <>like count</>
                <br></br>
                <>comment count</>
                </div>
            <ButtonDiv>
            <SocialButton onClick = {likePost}>like</SocialButton>
            <SocialButton onClick = {handleCommentSection}>comment</SocialButton>
            </ButtonDiv>
            </Div2>
            </Container>
            {commentSection? 'comments true':''

            }
            <br/>
            
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
  background-color: #ff7300;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;

const SocialButton = styled.button`
cursor: pointer;
font-size: 16px;
background-color: #ff7300;
border-radius: 5px;
padding: 8px 16px;
margin: 2px;
`;

const Divide = styled.span`
    font-size: 30px;
`;

const Details = styled.div`
    text-align: left;
    margin-left: 25px;
    font-size: 14px;
`;

const SubDetails = styled.div`
    text-align: center;
    font-size: 18px;
`

const Div = styled.div`
    display: flex;
    
`;

const Div2 = styled.div`
    display: flex;
    padding: 50px;
`


const ButtonDiv = styled.div`
    float: right;
    text-align: right;
    margin-left: 30px;
`;

const Container = styled.div`
    margin: auto;
    width: 50%;
`;

const Strong = styled.strong`
    font-size: 30px;
`;

export default Post;