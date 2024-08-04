import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/actions/languageActions";
import { setTheme } from "../../redux/actions/themeActions";
import * as Localization from "expo-localization";
import { ITheme } from "@/utilities/themes/ITheme";
import Text from "../../components/customstyles/Text";

const Settings = () => {
  const theme: any = useSelector((state: any) => state.theme.theme);
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.language);
  const themeName = useSelector((state: any) => state.theme.themeName); // Use themeName from Redux
  const styles = styling(theme);
  useEffect(() => {
    if (!language) {
      const deviceLanguage = Localization.locale.split("-")[0]; // Get language code
      dispatch(setLanguage(deviceLanguage));
    }
  }, [language]);

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  const handleThemeChange = (value: string) => {
    dispatch(setTheme(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.label}>Language</Text>
      <RNPickerSelect
        onValueChange={handleLanguageChange}
        items={[
          { label: "English", value: "en" },
          { label: "Spanish", value: "es" },
        ]}
        value={language}
      />
      <Text style={styles.label}>Theme</Text>
      <RNPickerSelect
        onValueChange={handleThemeChange}
        items={[
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "Custom", value: "custom" },
        ]}
        value={themeName}
      />
    </View>
  );
};

export default Settings;

const styling = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
