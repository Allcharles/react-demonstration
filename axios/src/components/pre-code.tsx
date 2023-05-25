import { ReactNode, FC } from "react";
import styled from "styled-components";

interface PreCodeProps {
  children?: ReactNode;
  className?: string;
  centered?: boolean;
}
const PreCode: FC<PreCodeProps> = ({ children, className, centered }) => {
  return (
    <Pre className={className} centered={centered}>
      <code>{children}</code>
    </Pre>
  );
};

const Pre = styled.pre<{ centered?: boolean }>`
  background-color: #eee;
  border-radius: 5px;
  border: 2px solid grey;
  border-left: 12px solid green;
  font-size: inherit;
  margin: ${(props) => (props.centered ? "1rem auto" : "1rem inherit")};
  padding: 14px;
  width: 450px;
`;
export default PreCode;
