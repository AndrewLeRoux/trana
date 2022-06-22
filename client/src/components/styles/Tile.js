import styled from "styled-components";

function Tile({ children }) {
    return (
        <Wrapper>
        {children}
      </Wrapper>
    );
  }

  const Wrapper = styled.section`
  padding: 4em;
  background: #ff9f51;
  margin-left: 150px;
  margin-right: 150px;
  color: black;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  
  border-style: solid outset;
  border-color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 40px;
    `;  

  export default Tile;