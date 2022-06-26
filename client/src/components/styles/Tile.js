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
  margin-left: 12%;
  margin-right: 12%;
  color: black;
  font-size: 16px;
  margin-top: 2%;
  margin-bottom: 2%;
  
  border-style: solid outset;
  border-color: black;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 40px;
    `;  

  export default Tile;