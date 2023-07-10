import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {MaterialDarkTheme, MaterialLightTheme} from './themes/color';
import BottomNavigation from './src/BottomNavigation/BottomNavigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View></View>;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const style: any = styles(
    isDarkMode ? MaterialDarkTheme : MaterialLightTheme,
  );

  //check if system theme is not dark mode
  if (!isDarkMode) {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={MaterialLightTheme}>
            <StatusBar barStyle={'light-content'} />
            <BottomNavigation screenName="Home" />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
  //return dark mode
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MaterialDarkTheme}>
        <SafeAreaView
          style={{
            width: '100%',
            height: '100%',
          }}>
          <StatusBar barStyle={'dark-content'} />
          <BottomNavigation screenName="Home" />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = (theme: any) =>
  StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    backgroundColor: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });

export default App;
