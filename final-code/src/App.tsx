import { Component, FC } from "react";
import "./app.css";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { UserService } from "./context/user";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserService>
        <Header />

        <Wrapper>
          <Outlet />
        </Wrapper>
      </UserService>
    </QueryClientProvider>
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
