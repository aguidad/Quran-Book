import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useKeepAwake} from 'expo-keep-awake';
import {useFonts} from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import {enableScreens} from 'react-native-screens';
import {store, persistor} from './src/config/redux/store';
import PartScreen from './src/screens/PartsScreen';
import HomeScreen from './src/screens/homeScren';
import ContentsScreen from './src/screens/ContentsScreen';
import SearchScreen from './src/screens/SearchScreen';
import OriontationScreen from './src/screens/OriontationScreen';
import DouaaScreen from './src/screens/DouaaScreen';
import SplashScreen from 'react-native-splash-screen';

// Prevent native splash screen from autohiding before App component declaration
// SplashScreen.preventAutoHideAsync()
//   .then((result) =>
//     console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
//   )
//   .catch(console.warn); // it's good to explicitly catch and inspect any error

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const [isLoding, setIsLoding] = useState(true);
  const [goToHome, setGotoHome] = useState(false);
  useKeepAwake();

  useEffect(() => {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hide();
    }, 100);
  });
  // loader font
  const [isLoaded] = useFonts({
    Arabic: require('./src/assets/fonts/uthman.ttf'),
  });

  async function changeScreenOrientation() {
    setGotoHome(true);
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
    );
    setIsLoding(false);
  }
  return !isLoaded ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar hidden={true} />
        {!goToHome ? (
          <OriontationScreen
            isLoding={setIsLoding}
            goToHome={setGotoHome}
            changeOrientation={changeScreenOrientation}
          />
        ) : isLoding ? (
          <AppLoading />
        ) : (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Content" component={ContentsScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Hezib" component={PartScreen} />
              <Stack.Screen name="Douaa" component={DouaaScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </PersistGate>
    </Provider>
  );
}

// "assetBundlePatterns": [
//   "/src/assets/images/*",
//   "/src/assets/images/Quran/*",
//   "/src/assets/fonts/*"
// ],

//     // react-native-unimodules expo-font  @expo/vector-icons expo-app-loading @fortawesome/free-solid-svg-icons @fortawesome/react-native-fontawesome @react-native-community/async-storage @react-native-community/masked-view @react-navigation/native @react-navigation/stack @use-expo/font d3-shape expo-keep-awake expo-screen-orientation react-native-gesture-handler react-native-reanimated@2.0.0-alpha.9.2 react-native-safe-area-context react-native-screens react-native-svg react-redux recyclerlistview redux redux-persist
