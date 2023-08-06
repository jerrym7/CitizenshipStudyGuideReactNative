import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useLayoutEffect} from 'react';
import FlipCard from '../Components/Card/FlipCard';
import questionsJSON from '../utils/Data/languages/es/100q.json';
const StudyGuideScreen = () => {
  const data = questionsJSON;
  const onSwipe = () => {
    setData(data.slice(1));
  };

  const width = Dimensions.get('window').width;
  const styles = styling({width});
  return (
    <View style={{width: '100%', height: '100%'}}>
      <GestureHandlerRootView>
        <Swipeable direction="right" onSwipe={onSwipe}>
          <View style={{height: '100%', width: '100%'}}>
            <FlatList
              horizontal
              nestedScrollEnabled
              pagingEnabled
              viewabilityConfig={{
                itemVisiblePercentThreshold: 100,
              }}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index}) => (
                <FlipCard
                  question={item.question}
                  answers={item.answers}
                  index={index}
                  backAnimatedViewStyle={styles.flipCardContainerStyle}
                  frontAnimatedViewStyle={styles.flipCardContainerStyle}
                />
              )}
            />
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

export default StudyGuideScreen;

const styling = ({width}) =>
  StyleSheet.create({
    flipCardContainerStyle: {
      height: '100%',
      width: width,
    },
  });
