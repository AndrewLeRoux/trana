import React, {useState} from "react";
import Comment from "./Comment"
import styled from "styled-components";

function Comments({comments, post, onAddComment}) {

    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData()
        formData.append('description', description)
        formData.append('commented_post_id', post.id)
        

        fetch("/comments", {
            method: "POST",
            body: formData
        })
        .then((r) => r.json())
        .then(() => onAddComment()); 
    }
    
    console.log(description)
  return (
    <div>
    {comments.map((comment) =>{ return <Comment key = {comment.id} comment = {comment} />})}
    <br/>
    <form onSubmit={handleSubmit}>
        <Textarea
            type="text"
            name = "description"
            placeholder= "Add a comment..."
            onChange={e => setDescription(e.target.value)}
            value={description}
        />
        <br/>
        <Button type="submit">Submit Comment</Button>
        </form>
  </div>
  )
}

const Textarea = styled.textarea`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 70%;
	margin-bottom: 0.5em;
`;

  const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default Comments;