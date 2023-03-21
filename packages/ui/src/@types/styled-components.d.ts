import "styled-components";
import { Colors, Elevation, Spacing, Typography } from "../@foundations";
import { CommonStyles } from "../common/commonStyles";
import { ColorTokenType } from "../common/theme/colorToken";

declare module "styled-components" {
  interface DefaultTheme extends ColorTokenType {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    elevation: Elevation;
    commonStyles: CommonStyles;
  }
}
