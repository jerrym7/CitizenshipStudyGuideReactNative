import AsyncStorage from '@react-native-community/async-storage';

// Save text
/**
 *
 * @param {Object} param0
 * @param {String} param0.key
 * @param {Object} param0.payload
 */
export const SaveAsyncFromStorage = async ({key, payload}) => {
  try {
    await AsyncStorage.setItem(key, payload);
  } catch (error) {
    console.log(error);
  }
};

// Get text
/**
 *
 * @param {Object} param0
 * @param {String} param0.key
 * @returns
 */
export const GetAsyncFromStorage = async ({key}) => {
  try {
    const payload = await AsyncStorage.getItem(key);
    return payload;
  } catch (error) {
    console.log(error);
  }
};
