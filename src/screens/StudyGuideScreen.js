import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlipCard from '../Components/Card/FlipCard';

const StudyGuideScreen = () => {
  return (
    <View>
      <FlipCard
        question="What is the supreme law of the land?"
        answers={[
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
          'the Constitution',
        ]}
      />
    </View>
  );
};

export default StudyGuideScreen

const styles = StyleSheet.create({})