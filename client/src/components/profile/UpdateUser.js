import { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "../styles/Error";
import styled from "styled-components";
import Tile from "../styles/Tile";

function UpdateUser({user, onUpdateUser}) {

  let history = useHistory();
  const [errors, setErrors] = useState([]);


  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState(null)
  const [bio, setBio] = useState(user.bio)
  

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
    
    

    fetch(`/users/${user.id}`,{
      method: "PATCH",
      body: formData
        })
        .then((r) => {
          if(r.ok) {
            r.json().then(
              (newUser) => {
                onUpdateUser(newUser)
                history.push("/profile")
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
          <img src={user.image_url} alt="profile"></img>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Username: </strong>{user.username}</p>
          <p><strong>Bio: </strong>{user.bio }</p>
        <form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
            type="text"
            name = "name"
            placeholder= "name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
        <Label>Username</Label>
            <Input
            type="text"
            name = "username"
            placeholder= "username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
        <Label>New password</Label>
        <Input
            type="password"
            name = "password"
            placeholder= "password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <Label>Confirmation new password</Label>
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
        <Input
            type="file"
            accept="image/*"
            multiple={false}
            name = "image"
            placeholder= "Profile Image"
            onChange={(e) => setImage(e.target.files[0])}
            
        />
        <br/>
        <Button type="submit">Update profile</Button>
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

const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;



export default UpdateUser;