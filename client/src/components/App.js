import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Login from "./login/Login";


function App() {

  const [user, setUser] = useState(null)

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Title>Trana</Title>
    </div>
  );
}

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`;


export default App;
