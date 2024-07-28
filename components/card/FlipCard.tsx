import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ICardInputProps {
  question: string;
  answers: Array<string>;
  frontAnimatedViewStyle: StyleProp<
    Animated.AnimateStyle<StyleProp<ViewStyle>>
  >;
  backAnimatedViewStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  questionAnswerTextStyle: StyleProp<TextStyle>;
  titleTextStyle: StyleProp<TextStyle>;
  index: number;
}

const FlipCard = ({
  question,
  answers,
  index = 0,
  ...props
}: ICardInputProps) => {
  const spin = useSharedValue<number>(0);

  const isAndroidPlatform: boolean = Platform.OS === "android"; // or 'ios'

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);
  return (
    <View>
      <View>
        <Animated.View
          style={[
            styles.frontAnimatedViewStyle,
            rStyle,
            isAndroidPlatform ? styles.elevation : styles.shadowProp,
            props.frontAnimatedViewStyle,
          ]}
        >
          <TouchableOpacity
            onPress={() => (spin.value = spin.value ? 0 : 1)}
            style={[styles.touchableStyle]}
            activeOpacity={1}
          >
            <Text
              style={[
                styles.titleTextStyle,
                styles.boldTextStyle,
                props.titleTextStyle,
              ]}
            >
              Q{index + 1}:{"\n"}
            </Text>
            <Text
              style={[
                styles.questionAnswerTextStyle,
                props.questionAnswerTextStyle,
              ]}
            >
              {question}
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            styles.backAnimatedViewStyle,
            bStyle,
            isAndroidPlatform ? styles.elevation : styles.shadowProp,
            props.backAnimatedViewStyle,
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => (spin.value = spin.value ? 0 : 1)}
            style={[styles.touchableStyle]}
          >
            <ScrollView
              nestedScrollEnabled
              contentContainerStyle={styles.scrollViewStyle}
              showsVerticalScrollIndicator={false}
            >
              <View style={[styles.answerContainerStyle]}>
                <Text
                  style={[
                    styles.titleTextStyle,
                    styles.boldTextStyle,
                    props.titleTextStyle,
                  ]}
                >
                  Answer:{"\n"}
                </Text>
                <View onStartShouldSetResponder={() => true}>
                  {answers.map((answer, index) => (
                    <Text
                      style={[
                        styles.questionAnswerTextStyle,
                        props.questionAnswerTextStyle,
                      ]}
                      key={index}
                    >
                      {`\u25CF  ${answer}`}
                    </Text>
                  ))}
                </View>
              </View>
            </ScrollView>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default FlipCard;

const styles = StyleSheet.create({
  frontAnimatedViewStyle: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  backAnimatedViewStyle: {
    height: 400,
    width: "100%",
    backgroundColor: "#A5D6A7",
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableStyle: {
    width: "80%",
    height: "80%",
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontally
    flex: 1,
  },
  answerContainerStyle: {
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontally
    flex: 1,
  },
  titleTextStyle: {
    fontSize: 26,
  },
  boldTextStyle: {
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 20,
  },
  questionAnswerTextStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontStyle: "italic",
  },
  shadowProp: {
    //ios
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    //android
    elevation: 10,
    shadowColor: "#171717",
  },
  scrollViewStyle: {
    justifyContent: "center", //Centered vertically
    alignItems: "center", //Centered horizontally
    flex: 1,
  },
});
