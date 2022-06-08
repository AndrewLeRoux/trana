import React, { useState } from "react";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile";

function SignUpForm ({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);
    

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            image_url: imageUrl
          }),
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
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
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
            name = "imageUrl"
            placeholder= "Image url..."
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
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


export default SignUpForm;