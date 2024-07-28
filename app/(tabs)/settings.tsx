import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/actions/languageActions";
import * as Localization from "expo-localization";

const Settings = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.language.language);

  useEffect(() => {
    if (!language) {
      const deviceLanguage = Localization.locale.split("-")[0]; // Get language code
      dispatch(setLanguage(deviceLanguage));
    }
  }, [language]);

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => handleLanguageChange(value)}
        items={[
          { label: "English", value: "en" },
          { label: "Spanish", value: "es" },
        ]}
        value={language}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
