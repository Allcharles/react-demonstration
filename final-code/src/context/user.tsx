import { AxiosResponse } from "axios";
import { FC, ReactNode, createContext, useContext } from "react";
import User from "../models/user";
import axiosClient from "../modules/axios-client";

interface IUserService {
  list(): Promise<AxiosResponse<User[]>>;
  show(id: number): Promise<AxiosResponse<User>>;
  create(user: Exclude<User, "id">): Promise<AxiosResponse<User>>;
  update(user: Partial<User> & Pick<User, "id">): Promise<AxiosResponse<User>>;
  delete(id: number): Promise<AxiosResponse<User>>;
}

const UserServiceContext = createContext<IUserService | undefined>(undefined);

type Props = { children: ReactNode };
export const UserService: FC<Props> = ({ children }) => {
  const route = "/users";
  const showRoute = (id: number) => `${route}/${id}`;
  const userService: IUserService = {
    list: async () => axiosClient.get(route),
    show: async (id) => axiosClient.get(showRoute(id)),
    create: async (user) => axiosClient.post(route, user),
    update: async (user) => axiosClient.put(showRoute(user.id), user),
    delete: async (id) => axiosClient.delete(showRoute(id)),
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
