import SplashScreen from 'react-native-splash-screen';

import React, {useEffect} from 'react';

function Loading(props) {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.show();
    }, 0);
    setTimeout(async () => {
      await SplashScreen.hide();
    }, 100);
  });
  return null;
}

export default Loading;
