import styled, { css } from "styled-components";

const headingStyles = css`
  background-color: aliceblue;
  margin: 0px;
  padding: 0.5rem;
`;

const H1 = styled.h1`
  ${headingStyles}
`;
const H2 = styled.h2`
  ${headingStyles}
`;
const H3 = styled.h3`
  ${headingStyles}
`;
const H4 = styled.h4`
  ${headingStyles}
`;
const H5 = styled.h5`
  ${headingStyles}
`;
const H6 = styled.h6`
  ${headingStyles}
`;
export { H1, H2, H3, H4, H5, H6 };
