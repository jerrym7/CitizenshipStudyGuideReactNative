import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

const HomeScreen = () => {
  useLayoutEffect(() => {
    StatusBar.setHidden(true, {
      animated: true,
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
