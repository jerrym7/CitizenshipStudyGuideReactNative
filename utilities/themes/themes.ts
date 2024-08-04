import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as DefaultTheme,
  MD3Theme,
} from "react-native-paper";
import { ITheme } from "./ITheme";

export const lightTheme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffff",
    secondary: "#fafafa",
    background: "#f5f5f5",
    text: "#262626",
    secondaryText: "#979797",
    divider: "#dedede",
    surface: "#FFFFFF",
    accent: "#172575",
    error: "#C62828", // Red 700
    disabled: "rgba(66, 66, 66, 0.38)",
    placeholder: "rgba(66, 66, 66, 0.54)",
    backdrop: "rgba(66, 66, 66, 0.5)",
    shadow: "#212121", // Grey 900
    success: "#388E3C", // Green 600
    warning: "#FFA000", // Amber 700
    activeTint: "#262626",
    activeIconColor: "#262626",
    activeIconText: "#262626",
    inactiveIconText: "#7b7b7b",
    inactiveIconColor: "#7b7b7b",
    inactiveTint: "#7b7b7b",
  },
};

export const darkTheme: ITheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#3c3c3c",
    secondary: "#606060",
    background: "#262626",
    text: "#ffffff",
    secondaryText: "#e9e9e9",
    divider: "#9d9d9d",
    surface: "#7b7b7b",
    accent: "#020829",
    error: "#C62828",
    disabled: "rgba(207, 216, 220, 0.38)",
    placeholder: "rgba(207, 216, 220, 0.54)",
    backdrop: "rgba(207, 216, 220, 0.5)",
    shadow: "#E0E0E0",
    success: "#388E3C",
    warning: "#FFA000",
    activeTint: "#f5f5f5",
    activeIconColor: "#f5f5f5",
    activeIconText: "#f5f5f5",
    inactiveIconText: "#c4c4c4",
    inactiveIconColor: "#c4c4c4",
    inactiveTint: "#c4c4c4",
  },
};

export const customTheme: ITheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff4081",
    secondary: "#c51162",
    background: "#f5f5f5",
    text: "#000000",
    secondaryText: "#757575",
    divider: "#BDBDBD",
    surface: "#ffffff",
    accent: "#c51162",
    error: "#B00020",
    disabled: "rgba(0, 0, 0, 0.38)",
    placeholder: "rgba(0, 0, 0, 0.54)",
    backdrop: "rgba(0, 0, 0, 0.5)",
    shadow: "#212121",
    success: "#388E3C",
    warning: "#FFA000",
    activeTint: "#673AB7",
    activeIconColor: "#673AB7",
    activeIconText: "#FFFFFF",
    inactiveIconText: "#673AB7",
    inactiveIconColor: "#673AB7",
    inactiveTint: "#FFFFFF",
  },
};
