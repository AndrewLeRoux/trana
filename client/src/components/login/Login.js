import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"
import styled from "styled-components";


function Login({ onLogin }) {

    const [showLogin, setShowLogin] = useState(true);

    
    return (
        <Wrapper>
            <Title>Trana</Title>
            {showLogin ? ( 
                <>
                <LoginForm onLogin = {onLogin} />
                <p>Need to create an account?</p>
                <Button onClick = { () => setShowLogin(false)}> Signup</Button>
                </>
                ) : (
                <>
                <SignUpForm onLogin = {onLogin} />
                <p>Already have an account?</p>
                <Button onClick = { () => setShowLogin(true)}> Login Page</Button>
                </>    
                 )}
        </Wrapper>
        )
}

const Button = styled.button`
cursor: pointer;
background-color: orange;
border-radius: 20px;
padding: 8px 16px;
margin: 2px;
  `;

const Wrapper = styled.section`
  text-align: center;
  font-size: 20px;
  text-align: center;
  color: orange;
`;

const Title = styled.h1`
    font-size: 45px;
    text-shadow: 0 0 3px #000000, 0 0 5px #000000;
`;



export default Login;