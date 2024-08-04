// CustomText.js
import React from "react";
import { Text as CustomText, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Text = ({ style, children, ...props }) => {
  // Access the theme's text color from Redux
  const textColor = useSelector((state) => state.theme.theme.colors.text);

  return (
    <CustomText style={[styles.text, { color: textColor }, style]} {...props}>
      {children}
    </CustomText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 16, // Default font size
  },
});
