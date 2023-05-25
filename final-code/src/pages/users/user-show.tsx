import { FC } from "react";
import { H3 } from "../../components/common/heading";
import PreCode from "../../components/common/pre-code";
import User from "../../models/user";

interface Props {
  user: User;
}
const UserShow: FC<Props> = ({ user }: Props) => {
  return (
    <>
      <H3>{user.name}</H3>
      <PreCode centered>{JSON.stringify(user, null, 2)}</PreCode>
    </>
  );
};

export default UserShow;
