import styled, { css } from "styled-components";
import theme, { ThemeType } from "./colors";

interface Props {
  type?: ThemeType;
}

const headingStyles = css<Props>`
  background-color: ${({ type }) => (type ? theme[type] : theme.info)};
  color: ${({ type }) =>
    type ? theme[`${type}Contrast`] : theme.infoContrast};
  margin: 0px;
  padding: 0.5rem;
`;

const H1 = styled.h1<Props>`
  ${headingStyles}
`;
const H2 = styled.h2<Props>`
  ${headingStyles}
`;
const H3 = styled.h3<Props>`
  ${headingStyles}
`;
const H4 = styled.h4<Props>`
  ${headingStyles}
`;
const H5 = styled.h5<Props>`
  ${headingStyles}
`;
const H6 = styled.h6<Props>`
  ${headingStyles}
`;
export { H1, H2, H3, H4, H5, H6 };
