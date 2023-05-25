import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  className?: string;
}
const PreCode: FC<Props> = ({ children, className }) => {
  return (
    <Pre className={className}>
      <Code>{children}</Code>
    </Pre>
  );
};

const Pre = styled.pre`
  font-size: inherit;
  border: 2px solid grey;
  width: 450px;
  border-left: 12px solid green;
  border-radius: 5px;
  padding: 14px;
  background-color: #eee;
`;

const Code = styled.code``;

export default PreCode;
