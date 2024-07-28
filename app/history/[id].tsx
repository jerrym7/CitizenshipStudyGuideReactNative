import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ExamDetailTabScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>HistoryExamTabScreen {id}</Text>
    </View>
  );
};

export default ExamDetailTabScreen;

const styles = StyleSheet.create({});
