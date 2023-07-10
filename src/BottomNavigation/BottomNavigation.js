import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import StudyGuideScreen from '../screens/StudyGuideScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

/**
 *
 * @param {Object} param0
 * @param {String} param0.screenName
 * @returns
 */
const BottomNavigation = ({screenName}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={screenName}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color, size, tintColor}) => (
              <Ionicons size={size} color={color} name="home-outline" />
            ),
          }}
        />
        <Tab.Screen
          name="Study"
          component={StudyGuideScreen}
          options={{
            tabBarLabel: 'Study',
            tabBarIcon: ({focused, color, size, tintColor}) => (
              <FeatherIcons size={size} color={color} name="book" />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({focused, color, size, tintColor}) => (
              <MaterialIcons size={size} color={color} name="history" />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused, color, size, tintColor}) => (
              <FeatherIcons size={size} color={color} name="settings" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
