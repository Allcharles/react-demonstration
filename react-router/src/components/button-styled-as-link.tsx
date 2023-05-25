import styled from "styled-components";

const ButtonStyledAsLink = styled.button`
  background-color: transparent;
  border: 0;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
export default ButtonStyledAsLink;
