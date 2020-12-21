import { createStore } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const presistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(presistedReducer);
let persistor = persistStore(store);

export { store, persistor };
