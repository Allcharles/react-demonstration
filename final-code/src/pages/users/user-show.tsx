import { FC } from "react";
import styled from "styled-components";
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
      <CenteredPreCode>{JSON.stringify(user, null, 2)}</CenteredPreCode>
    </>
  );
};

const CenteredPreCode = styled(PreCode)`
  margin: 1rem auto;
`;
export default UserShow;
