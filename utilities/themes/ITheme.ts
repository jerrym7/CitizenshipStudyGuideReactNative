import { MD3Theme } from "react-native-paper";

// Extend the default color interface to include custom colors
interface CustomColors {
  secondary: string;
  iconText: string;
  secondaryText: string;
  divider: string;
  shadow: string;
  success: string;
  warning: string;
  text: string;
  accent: string;
  disabled: string;
  placeholder: string;
  tint: string;
  iconColor: string;
  inactiveIconText: string;
  inactiveIconColor: string;
  inactiveTint: string;
}

// Create a new theme interface that extends MD3Theme with additional custom colors
export interface ITheme extends MD3Theme {
  colors: MD3Theme["colors"] & CustomColors;
}
