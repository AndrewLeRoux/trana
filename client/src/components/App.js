import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Login from "./login/Login";
import Profile from "./profile/Profile"
import NavBar from "./NavBar";
import UpdateUser from "./profile/UpdateUser"


function App() {

  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [likes, setLikes] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    async function getPosts() {
      const r = await fetch("/posts")
      if (r.ok) {
        r.json().then((posts) => setPosts(posts))
      }
    }

    async function getTags() {
      const r = await fetch("/tags")
      if (r.ok) {
        r.json().then((tags) => setTags(tags))
      }
    }

    async function getLikes() {
      const r = await fetch("/likes")
      if (r.ok) {
        r.json().then((likes) => setLikes(likes))
      }
    }

    getPosts();
    getLikes();
    getTags();

  }, [user])




  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Title>Trana</Title>
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile user = {user} onUserDelete={() => setUser(null)}/>
        </Route>
        <Route exact path="/favorites">
        </Route>
        <Route exact path="/create_post">
        </Route>
        <Route exact path="/">
        </Route>
        <Route exact path="/my_posts">
        </Route>
        <Route exact path="/update_post">
        </Route>
        <Route exact path="/update_user">
          <UpdateUser user = {user} onUpdateUser = {(newUser) => setUser(newUser)}/>
        </Route>
        
      </Switch>
    </div>
  );
}

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`;


export default App;
