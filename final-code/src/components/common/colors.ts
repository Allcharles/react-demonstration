import { DataType } from "csstype";

export type ThemeType = "primary" | "info" | "success" | "error";
export type ThemeTypeModifier = "" | "Contrast" | "Darker" | "DarkerContrast";
const theme: Record<`${ThemeType}${ThemeTypeModifier}`, DataType.Color> = {
  primary: "#0d6efd",
  primaryContrast: "white",
  primaryDarker: "#0b5ed7",
  primaryDarkerContrast: "white",
  info: "#3498db",
  infoContrast: "white",
  infoDarker: "#2f89c5",
  infoDarkerContrast: "white",
  success: "#198754",
  successContrast: "white",
  successDarker: "#157347",
  successDarkerContrast: "white",
  error: "#dc3545",
  errorContrast: "white",
  errorDarker: "#bb2d3b",
  errorDarkerContrast: "white",
};

export default theme;
