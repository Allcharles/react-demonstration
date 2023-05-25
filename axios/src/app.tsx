import axios from "axios";
import { FC, useEffect, useState } from "react";
import ButtonStyledAsLink from "./components/button-styled-as-link";
import PreCode from "./components/pre-code";
import User from "./models/user";

const client = axios.create({
  baseURL: "http://localhost:3001",
});
client.defaults.headers.common["Content-Type"] = "application/json";

const App: FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

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
            <ButtonStyledAsLink type="button" onClick={() => setUser(user)}>
              {user.name}
            </ButtonStyledAsLink>
          </li>
        ))}
      </ul>

      {user && <UserShow user={user} />}
    </>
  );
};

interface UserShowProps {
  user: User;
}
const UserShow: FC<UserShowProps> = ({ user }) => {
  return (
    <>
      <h3>{user.name}</h3>
      <PreCode centered>{JSON.stringify(user, null, 2)}</PreCode>
    </>
  );
};

export default App;
