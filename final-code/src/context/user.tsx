import { FC, ReactNode, createContext, useContext } from "react";
import User from "../models/user";
import axiosClient from "../modules/axios-client";

interface IUserService {
  list(): Promise<User[]>;
  show(id: number): Promise<User>;
  create(user: Exclude<User, "id">): Promise<User>;
  update(user: Partial<User> & Pick<User, "id">): Promise<User>;
  delete(id: number): Promise<void>;
}

const UserServiceContext = createContext<IUserService | undefined>(undefined);

type Props = { children: ReactNode };
export const UserService: FC<Props> = ({ children }) => {
  const route = "/users";
  const showRoute = (id: number) => `${route}/${id}`;
  const userService: IUserService = {
    list: async () => (await axiosClient.get<User[]>(route)).data,
    show: async (id) => (await axiosClient.get<User>(showRoute(id))).data,
    create: async (user) => (await axiosClient.post<User>(route, user)).data,
    update: async (user) =>
      (await axiosClient.put<User>(showRoute(user.id), user)).data,
    delete: async (id) => (await axiosClient.delete<void>(showRoute(id))).data,
  };

  return (
    <>
      <UserServiceContext.Provider value={userService}>
        {children}
      </UserServiceContext.Provider>
    </>
  );
};

const useUserService = () => {
  const context = useContext(UserServiceContext);
  if (context) return context;

  throw new Error(
    "UserServiceContext was not provided. Make sure your component is a child of the UserService."
  );
};

export default useUserService;
