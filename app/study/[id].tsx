import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import FlipCard from "../../components/card/FlipCard";
import { Question } from "@/types/QuestionTypes";
import { getQuestionsByLanguage } from "@/utilities/dataRetrieveHelper";

const QuestionScreen = () => {
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Invalid question ID!</Text>
      </View>
    );
  }

  const questionId = parseInt(id, 10);

  const language = useSelector((state: any) => state.language.language);
  const questions: any[] = getQuestionsByLanguage(language);

  const question = questions.find((q) => q.index === questionId);

  if (!question) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Question not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlipCard
        question={question.question}
        answers={question.answers}
        index={question.index}
        backAnimatedViewStyle={styles.flipCardContainerStyle}
        frontAnimatedViewStyle={styles.flipCardContainerStyle}
        questionAnswerTextStyle={styles.questionAnswerTextStyle}
        titleTextStyle={styles.titleTextStyle}
      />
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  flipCardContainerStyle: {
    height: "100%",
    width: "100%",
  },
  questionAnswerTextStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontStyle: "italic",
  },
  titleTextStyle: {
    fontSize: 26,
  },
});
