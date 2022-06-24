import React from "react";
import styled from "styled-components";


function Comment({comment}) {
    console.log(comment)

  return (
   <Wrapper>
    {/* {comment.commented_user.name} */}
    {comment.description}
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
    `;  

export default Comment;