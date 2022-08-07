import { createStitches } from "@stitches/react";
import { colors, fontWeight } from "../styles/palette";

// You should exports all properties
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // See the [configuration guide](https://stitches.dev/docs/tokens)
  theme: {
    colors: {
      background: colors.background,
      blue: colors.blue,
      dark: colors.dark,
      grey: colors.grey,
      orange: colors.orange,
    },
    fontWeights: {
      thin: fontWeight.thin,
      extraLight: fontWeight.extraLight,
      light: fontWeight.light,
      regular: fontWeight.regular,
      medium: fontWeight.medium,
      semiBold: fontWeight.semiBold,
      bold: fontWeight.bold,
      extraBold: fontWeight.extraBold,
      black: fontWeight.black,
    },
  },
});
