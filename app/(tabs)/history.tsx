import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Text from "../../components/customstyles/Text";

const history = () => {
  const theme: any = useSelector((state: any) => state.theme.theme);
  return (
    <View>
      <Text style={{}}>history</Text>
    </View>
  );
};

export default history;

const styles = StyleSheet.create({});
