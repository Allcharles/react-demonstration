import { FC } from "react";
import { H2 } from "./heading";
import PreCode from "./pre-code";

interface Props {
  message?: string;
  dump?: string;
}
const ErrorHandler: FC<Props> = ({ message, dump }) => {
  return (
    <>
      <H2 type="error">Error</H2>
      {message && <p>{message}</p>}
      {dump && <PreCode centered>{dump}</PreCode>}
    </>
  );
};

export default ErrorHandler;
