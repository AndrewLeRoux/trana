import { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "./Error";
import styled from "styled-components";

function UpdatePost({post, tags, user, onUpdatePost}) {

  let history = useHistory();
  const [errors, setErrors] = useState([]);


  const [name, setName] = useState(post.name)
  const [image_url, setImageUrl] = useState(post.image_url)
  const [description, setDescription] = useState(post.description)
  const [tag_id, setTagId] = useState(post.tag_id)
  

  let tagList = tags.map((tag) =>{
    return <option key = {tag.id} value = {tag_id}>{tag.name}</option>
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/posts/${post.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image_url: image_url,
          description: description,
          tag_id: tag_id
        }),
        })
        .then((r) => {
          if(r.ok) {
            r.json().then(
              (newPost) => {
                onUpdatePost(newPost)
                history.push("/my_posts")
              })
          }
          else {
            r.json().then((err) => setErrors(err.errors))
          }
        })
  }

  return (
    <>
          <Wrapper>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p><strong>Tag: </strong>{post.tag.name}</p>
            <p><strong>Creator: </strong>{post.user.username}</p>
            <p><strong>Contact information: </strong>{post.user.phone_number}</p>
    <form onSubmit={handleSubmit}>
      <Label>Post Title</Label>
        <Input
            type="text"
            name = "name"
            placeholder="Post Title..."
            onChange={e => setName(e.target.value)}
            value={name}
        />
        <Label>Image Url</Label>
        <Textarea
            type="text"
            name = "image_url"
            placeholder= "image_url..."
            onChange={e => setImageUrl(e.target.value)}
            value={image_url}
        />
        <Label>Description</Label>
        <Textarea
            type="text"
            name = "description"
            placeholder= "description..."
            onChange={e => setDescription(e.target.value)}
            value={description}
        />
        <Label>Tag</Label>
        <Select onChange = {e => setTagId(e.target.selectedIndex)}>
        <option value = "" hidden>Select a Tag...</option>
            {tagList}
        </Select>
        <br/>
        <Button type="submit">Update Post</Button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
        </Wrapper>
        </>
  )
}


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


const Label = styled.label`
	margin-bottom: 0.5em;
  text-decoration: underline;
	color: black;
    display: block;
`;


const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
`;

const Textarea = styled.textarea`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
`;

const Select = styled.select`
  width: 50%;
  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  border: none;
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  `;


  const Button = styled.button`
  cursor: pointer;
  background-color: green;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default UpdatePost;