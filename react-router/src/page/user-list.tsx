import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "../models/user";
import client from "../modules/axios-client";

const UserList: FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const users = (await client.get<User[]>("/users")).data;
      setUsers(users);
    };
    getUsers();
  }, []);

  if (!users) return <h1>Loading...</h1>;

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={"/users/" + user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UserList;
