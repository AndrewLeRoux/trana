import React, { useState } from "react";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile";


function LoginForm ({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
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
        <Button type="submit">Login</Button>
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


export default LoginForm;