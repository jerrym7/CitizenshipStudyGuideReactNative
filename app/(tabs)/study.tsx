import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  FlatList as FlatListType,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndex } from "../../redux/actions/questionActions";
import FlipCard from "../../components/card/FlipCard";
import CustomModal from "../../components/popup/ModalComponent";
import { getQuestionsByLanguage } from "../../utilities/dataRetrieveHelper"; // Import the helper function

interface Question {
  question: string;
  answers: string[];
}

const Study = () => {
  const width = Dimensions.get("window").width;
  const styles = styling({ width });
  const language = useSelector((state: any) => state.language.language);
  const currentIndex = useSelector((state: any) => state.question.currentIndex);
  const dispatch = useDispatch();
  const [data, setData] = useState<Question[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = useRef<FlatListType<Question>>(null);

  useEffect(() => {
    const loadQuestions = () => {
      try {
        const questions = getQuestionsByLanguage(language);
        setData(questions);
      } catch (error) {
        console.error("Error loading questions:", error);
      }
    };

    loadQuestions();
  }, [language]);

  useEffect(() => {
    if (currentIndex > 0) {
      setModalVisible(true);
    }
  }, [currentIndex]);

  const handleRestart = () => {
    dispatch(setCurrentIndex(0));
    setModalVisible(false);
  };

  const handleResume = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <CustomModal
        visible={modalVisible}
        question="Continue from where you left off?"
        description="Do you want to start from the beginning or continue from where you left off?"
        buttons={[
          { title: "Start Over", onPress: handleRestart },
          { title: "Resume", onPress: handleResume },
        ]}
      />
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const questionItem = item as Question; // Type assertion
          return (
            <FlipCard
              question={questionItem.question}
              answers={questionItem.answers}
              index={data.indexOf(questionItem)}
              backAnimatedViewStyle={styles.flipCardContainerStyle}
              frontAnimatedViewStyle={styles.flipCardContainerStyle}
              questionAnswerTextStyle={styles.questionAnswerTextStyle}
              titleTextStyle={styles.titleTextStyle}
            />
          );
        }}
        initialScrollIndex={currentIndex}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />
    </View>
  );
};

export default Study;

const styling = ({ width }: { width: number }) =>
  StyleSheet.create({
    flipCardContainerStyle: {
      height: "100%",
      width: width,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
