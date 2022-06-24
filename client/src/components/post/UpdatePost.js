import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile"

function UpdatePost({post, user, tags, onUpdatePost}) {

  console.log(post)
  let history = useHistory();

  const [name, setName] = useState(post.name)
  const [description, setDescription] = useState(post.description)
  const [distance, setDistance] = useState(post.distance)
  const [hours, setHours] = useState(post.hours)
  const [minutes, setMinutes] = useState(post.minutes)
  const [seconds, setSeconds] = useState(post.seconds)
  const [tag_id, setTagId] = useState(post.tag_id)
  const [image, setImage] = useState(null);
  
  const [errors, setErrors] = useState([]);

  

  let tagList = tags.map((tag) =>{
    return <option key = {tag.id} value = {tag_id}>{tag.name}</option>
  })

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const h = parseFloat(hours)
    const m = parseFloat(minutes)
    const s = parseFloat(seconds)
    const d = parseFloat(distance)

    let pace = 0;
    if (d !== 0) {
      pace = ((60*h)+m+(s/60))/d
    }
    
        
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('distance', distance)
    formData.append('hours', hours)
    formData.append('minutes', minutes)
    formData.append('seconds', seconds)
    formData.append('pace', pace)
    formData.append('tag_id', tag_id)

    if (image != null) {
      formData.append('image', image)
    }

    fetch(`/posts/${post.id}`,{
      method: "PATCH",
      body: formData
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
          <Tile>
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p><strong>Tag: </strong>{post.tag.name}</p>
            <p><strong>Creator: </strong>{post.owner.name}</p>
    <form onSubmit={handleSubmit}>
    <Label>Post Title</Label>
        <Input
            type="text"
            name = "name"
            placeholder="Post Title..."
            onChange={e => setName(e.target.value)}
            value={name}
        />
        <Label>description</Label>
        <Textarea
            type="text"
            name = "description"
            placeholder= "description..."
            onChange={e => setDescription(e.target.value)}
            value={description}
        />
        <Label>Distance</Label>
        <Input
            type="number"
            name = "distance"
            placeholder= "distance..."
            onChange={e => setDistance(e.target.value)}
            value={distance}
        />
        <Label>Total Time of Workout</Label>
        <Input
            type="number"
            name = "hours"
            placeholder="hours..."
            onChange={e => setHours(e.target.value)}
            value={hours}
        />
        <Input
            type="minutes"
            name = "minutes"
            placeholder="minutes..."
            onChange={e => setMinutes(e.target.value)}
            value={minutes}
        />
        <Input
            type="seconds"
            name = "seconds"
            placeholder="seconds..."
            onChange={e => setSeconds(e.target.value)}
            value={seconds}
        />
        <Label>Workout Image</Label>
        <Input
            type="file"
            accept="image/*"
            multiple={false}
            name = "image"
            placeholder= "Image"
            onChange={(e) => setImage(e.target.files[0])}
            
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
        </Tile>
        </>
  )
}


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
  background-color: #ff7300;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default UpdatePost;