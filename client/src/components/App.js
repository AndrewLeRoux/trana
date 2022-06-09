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


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  function handleUserDelete() {
    setUser(null)
  }


  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Title>Trana</Title>
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile user = {user} onUserDelete={handleUserDelete}/>
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
          <UpdateUser user = {user}/>
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
