import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "black",
    "border-radius": "20px",
    "text-align": "center"
};

function NavBar({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      return (
        <Wrapper>
        <div className = "navbar">
        <br></br>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61fb78"
          }}
        >
          Posts
        </NavLink>
        <NavLink
          to="/my_posts"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61fb78"
          }}
        >
          My Posts
        </NavLink>
        <NavLink
          to="/create_post"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61fb78"
          }}
        >
          New Post
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61fb78"
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/favorites"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#61fb78"
          }}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          onClick = {handleLogoutClick}
        >
          Logout
        </NavLink>
        </div>
      </Wrapper>
          )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



export default NavBar;