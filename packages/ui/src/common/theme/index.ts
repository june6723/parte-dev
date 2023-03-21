import { COLORS, SPACING, TYPOGRAPHY, ELEVATION } from "../../@foundations";
import { commonStyles } from "../commonStyles";
import { colorTokens } from "./colorToken";

const theme = {
  colors: COLORS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  elevation: ELEVATION,
  commonStyles,
  ...colorTokens,
};
export default theme;
