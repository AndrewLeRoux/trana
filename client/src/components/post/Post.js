import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Tile from "../styles/Tile"
import Comments from "./Comments"


function Post({post, user, likes, comments, onPostDelete, setUpdatingPost, onAddLike, onAddComment}) {

    const [commentSection, setCommentSection] = useState(false)

    let history = useHistory();

    let myPost = false
    
    if (post.owner.id === user.id){
        myPost = true
    }

    const postId = post.id

    const mins = Math.floor(post.pace)
    let secs = Math.round((post.pace - mins)*60)
    if (secs === 0){
        secs = '00'
    }
    else if (secs < 10){
        secs = '0' + secs
    }

    const date = new Date(post.created_at)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let timeOfDay = 'AM'

    if (hours === 0){
        hours = 12
    }
    else if (hours === 12){
        timeOfDay = 'PM'
    }
    else if (hours > 12){
        hours = hours - 12
        timeOfDay = 'PM'
    }

    if (minutes < 10){
        minutes = '0' + minutes
    }


    function deletePost() {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then(() => onPostDelete(postId));
    }

    function onSetUpdatingPost() {
        setUpdatingPost(post)
        history.push("/update/post");
    }

    function likePost() {
        if (post.likes.find(like => like.liked_user_id === user.id)){
            alert("you've already liked this post!")
        }
        else{
        const formData = new FormData()
        formData.append('liked_post_id', post.id)

        fetch("/likes", {
                method: "POST",
                body: formData
            })
            .then((r) => r.json())
            .then(() => onAddLike()); 

        }
    }


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
                <>{date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()} at {hours}:{minutes} {timeOfDay}</>
                <SubDetails>
                <Strong>{post.name}</Strong>
                <p>{post.description}</p>
                <>
                Distance: {post.distance} miles <Divide>|</Divide> Pace: {mins}:{secs} mins / mile
                </>
                </SubDetails>
            </Details>
            </Div>
            <div>
            <img src = {post.image_url} alt="post" id="app-image"></img>
            </div>
            <Div2>
                <div>
                <>{post.likes.length} likes</>
                <br></br>
                <>{post.comments.length} comments</>
                </div>
            <ButtonDiv>
            <SocialButton onClick = {likePost}>like</SocialButton>
            <SocialButton onClick = {handleCommentSection}>comments</SocialButton>
            </ButtonDiv>
            </Div2>
            </Container>
            {commentSection? <Comments comments = {post.comments} post={post} onAddComment={onAddComment}/>:''

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
    margin-left: 7%;
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
    padding: 2%;
    margin: auto;
    width: 65%;
`


const ButtonDiv = styled.div`
    float: right;
    text-align: right;
    margin-left: 5%;
`;

const Container = styled.div`
    margin: auto;
    width: 65%;
`;

const Strong = styled.strong`
    font-size: 30px;
`;

export default Post;