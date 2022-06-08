import styled from "styled-components";

function Error({ children }) {
    return (
        <Wrapper>
        <Message>{children}</Message>
      </Wrapper>
    );
  }

  const Wrapper = styled.div`
  color: red;
  background-color: pink;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  margin: 8px 0;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
`;

const Message = styled.p`
  margin: 0;
`;

  export default Error;