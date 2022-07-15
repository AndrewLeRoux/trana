import React from "react"
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Tile from "../styles/Tile";

function Profile({user, onUserDelete}) {
    
    let history = useHistory();
  
    function removeUser() {
        
      
      fetch(`/users/${user.id}`, {
          method: "DELETE",
      })
      .then(() => onUserDelete());
    
    }

    function updateUser() {
      history.push("/user/update")
    }

      return (
        <Tile>
          <h1 id = "myProfile">My Profile</h1>
          <img className="app-image" src={user.image_url} alt="profile"></img>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Username: </strong>{user.username}</p>
          <p><strong>Bio: </strong>{user.bio }</p>
          <Button onClick= {updateUser}>Update Profile</Button>
          <Button onClick= {removeUser}>Delete Profile</Button>
        </Tile>
          )
}



const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;


export default Profile;