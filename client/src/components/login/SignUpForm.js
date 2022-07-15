import React, { useState } from "react";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile";

function SignUpForm ({onLogin}) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);
    
    

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        
        const formData = new FormData()
        formData.append('name', name)
        formData.append('username', username)
        formData.append('password', password)
        formData.append('password_confirmation', passwordConfirmation)
        formData.append('bio', bio)
        if (image != null) {
          formData.append('image', image)
        }
        
        fetch("/signup", {
          method: "POST",
          body: formData,
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return (
      <Tile>
        <Title>Signup</Title>
        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            name = "name"
            placeholder= "name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
        <br/>
            <Input
            type="text"
            name = "username"
            placeholder= "username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <br/>
        <Input
            type="password"
            name = "password"
            placeholder= "password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <br/>
        <Input
            type="password"
            name = "password confirmation"
            placeholder= "password confirmation..."
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
        />
        <br/>
        <Input
            type="text"
            name = "bio"
            placeholder= "bio..."
            onChange={(e) => setBio(e.target.value)}
            value={bio}
        />
        <br/>
        <Label>Profile image</Label>
        <Input
            type="file"
            accept="image/*"
            multiple={false}
            name = "image"
            placeholder= "Profile Image"
            onChange={(e) => setImage(e.target.files[0])}
            
        />
        <br/>
        <Button type="submit">Create Account</Button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
        </Tile>
    )
}



const Input = styled.input`
	padding: 0.5em;
	color: black;
	background: white;
	border: none;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
  text-decoration: underline;
	color: black;
  display: block;
`;

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`;


export default SignUpForm;