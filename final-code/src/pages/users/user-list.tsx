import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { H2 } from "../../components/common/heading";
import useUserService from "../../context/user";
import User from "../../models/user";
import UserShow from "./user-show";

const UserList: FC = () => {
  const userService = useUserService();
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await userService.list();
      setUsers(response.data);
    };
    getUsers();
  }, [userService]);

  if (!users) return <h1>Loading...</h1>;

  return (
    <>
      <H2>User List</H2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Button type="button" onClick={() => setUser(user)}>
              {user.name}
            </Button>
          </li>
        ))}
      </ul>

      {user && <UserShow user={user} />}
    </>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export default UserList;
