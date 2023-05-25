import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreCode from "../components/pre-code";
import User from "../models/user";
import client from "../modules/axios-client";

const UserShow: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const userId = useParams<{ id: string }>().id;

  useEffect(() => {
    const getUser = async () => {
      const user = (await client.get<User>("/users/" + userId)).data;
      setUser(user);
    };
    getUser();
  }, [userId]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <>
      <h2>{user.name}</h2>
      <PreCode centered>{JSON.stringify(user, null, 2)}</PreCode>
    </>
  );
};
export default UserShow;
