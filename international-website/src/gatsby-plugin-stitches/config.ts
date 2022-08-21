import { createStitches } from "@stitches/react";
import { colors, fontSize, fontWeight } from "../css/palette";

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
      primaryDefault: colors.primary.default,
      primaryLight: colors.primary.light,
      white: colors.white,
      grey: colors.grey,
      lightGrey: colors.lightGrey,
      black: colors.black,
      dark: colors.dark,
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
    fontSizes: {
      verySmall: fontSize.verySmall,
      small: fontSize.small,
      semiMedium: fontSize.semiMedium,
      medium: fontSize.medium,
      large: fontSize.large,
      veryLarge: fontSize.veryLarge,
      hero: fontSize.hero,
    },
  },
});
