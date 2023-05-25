import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Button, ButtonLink } from "../../components/common/button";
import ErrorHandler from "../../components/common/error-handler";
import { H2 } from "../../components/common/heading";
import useUserService from "../../context/user";
import User from "../../models/user";
import UserShow from "./user-show";

const UserList: FC = () => {
  const userService = useUserService();
  const query = useQuery("Users", userService.list);
  const [user, setUser] = useState<User | null>(null);

  if (query.isError)
    return <ErrorHandler dump={JSON.stringify(query.error, undefined, 2)} />;

  if (query.isSuccess)
    return (
      <>
        <H2>User List</H2>
        <ul>
          {query.data.map((user) => (
            <li key={user.id}>
              <ButtonLink type="button" onClick={() => setUser(user)}>
                {user.name}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <Button btnType="info">Testing</Button>

        {user && <UserShow user={user} />}
      </>
    );

  return <h1>Loading...</h1>;
};

export default UserList;
