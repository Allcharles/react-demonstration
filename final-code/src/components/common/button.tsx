import styled from "styled-components";
import theme, { ThemeType } from "./colors";

interface Props {
  btnType?: ThemeType;
}
export const Button = styled.button<Props>`
  background-color: ${({ btnType }) =>
    btnType ? theme[btnType] : theme.primary};
  border: 0px;
  border-radius: 0.375rem;
  color: ${({ btnType }) =>
    btnType ? theme[`${btnType}Contrast`] : theme.primaryContrast};
  padding: 0.375rem 0.75rem;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    background-color: ${({ btnType }) =>
      btnType ? theme[`${btnType}Darker`] : theme.primary};
    color: ${({ btnType }) =>
      btnType
        ? theme[`${btnType}DarkerContrast`]
        : theme.primaryDarkerContrast};
  }
`;
export const ButtonLink = styled.button`
  background-color: transparent;
  border: 0;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
