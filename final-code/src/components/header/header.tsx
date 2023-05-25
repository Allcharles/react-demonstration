import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <Wrapper>
      <Title>Example App</Title>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">Users</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/albums">Albums</NavLink>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #3498db;
  height: 290px;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 42px;
  font-weight: 100;
  line-height: 230px;
  margin: 0;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.1);
  height: 60px;
  line-height: 60px;
  width: 100%;
`;

const NavLink = styled(Link)`
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  line-height: 1;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 1px #fff;
  }
`;

export default Header;
