import React, {useLayoutEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Platform,
  NativeModules,
} from 'react-native';
import {
  SaveAsyncFromStorage,
  GetAsyncFromStorage,
} from './src/utils/Helpers/storage/StorageHelper';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {MaterialDarkTheme, MaterialLightTheme} from './themes/color';
import BottomNavigation from './src/BottomNavigation/BottomNavigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
interface IStoragePayload {
  key: string;
  payload: object;
}

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View></View>;
}

// Languages: English, Arabic, Chinese, Korean, Spanish, Tagalog, and Vietnamese
//TODO: get 100q pdf file chinese https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q_Chinese.pdf
function App(): JSX.Element {
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;
  const storagePayload: IStoragePayload = {
    key: 'language',
    payload: deviceLanguage,
  };
  if (deviceLanguage) {
    SaveAsyncFromStorage(storagePayload);
  }
  useLayoutEffect(() => {}, []);
  const isDarkMode = useColorScheme() === 'dark';

  const style: any = styles(
    isDarkMode ? MaterialDarkTheme : MaterialLightTheme,
  );

  //check if system theme is not dark mode
  if (!isDarkMode) {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={MaterialLightTheme}>
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
