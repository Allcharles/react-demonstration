import { FC } from "react";
import "./app.css";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { UserService } from "./context/user";

const App: FC = () => {
  return (
    <UserService>
      <Header />

      <Wrapper>
        <Outlet />
      </Wrapper>
    </UserService>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  flex: 1;
  margin: 1rem auto;
  min-width: min(calc(100% - 1rem), 800px);
  width: 70%;
  overflow: hidden;
`;

export default App;
