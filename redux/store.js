import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import languageReducer from "./reducers/languageReducer";
import questionReducer from "./reducers/questionReducer";
import themeReducer from "./reducers/themeReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["language", "question", "theme"],
};

const rootReducer = combineReducers({
  language: languageReducer,
  question: questionReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
