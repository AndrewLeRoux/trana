import React from "react";
import styled from "styled-components";


function Comment({comment}) {
    console.log(comment)

  return (
   <Wrapper>
    <Div>
    <img src={comment.commented_user.image_url} alt= "owner" width = "40px" height = "40px"></img>
    <br/>
    </Div>
    <CommentWrapper>
    <strong>{comment.commented_user.name}</strong>
    <br/>
    <Div2>
    {comment.description}
    </Div2>
    </CommentWrapper>
    </Wrapper>
  )
}




const Wrapper = styled.section`
  padding: 1em;
  background: #ffbe8c;
  margin-left: 150px;
  margin-right: 150px;
  color: black;
  font-size: 12px;
  border-style: solid outset;
  border-color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  display: flex;
    `;  


  const CommentWrapper = styled.div`
    text-align: left;
    margin-left: 5%;
    // margin-top: 8px;
  `;

  const Div = styled.div`
    margin-left: 7%;
  `;

  const Div2 = styled.div`
    margin-top: 6px; 
  `
export default Comment;