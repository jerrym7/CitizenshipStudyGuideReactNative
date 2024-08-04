import { SET_THEME } from "../actions/themeActions";
import {
  lightTheme,
  darkTheme,
  customTheme,
} from "../../utilities/themes/themes";

const initialState = {
  theme: lightTheme,
  themeName: "light", // Add themeName to track the current theme
};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      switch (action.payload) {
        case "dark":
          return { ...state, theme: darkTheme, themeName: "dark" };
        case "light":
          return { ...state, theme: lightTheme, themeName: "light" };
        case "custom":
          return { ...state, theme: customTheme, themeName: "custom" };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default themeReducer;
