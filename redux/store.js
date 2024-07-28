import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import languageReducer from "./reducers/languageReducer";
import questionReducer from "./reducers/questionReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["language", "question"],
};

const rootReducer = combineReducers({
  language: languageReducer,
  question: questionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
