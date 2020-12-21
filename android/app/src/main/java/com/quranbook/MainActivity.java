package com.quranbook;

import android.os.Bundle;
import expo.modules.splashscreen.singletons.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
   SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class, false);
  }

  @Override
  protected String getMainComponentName() {
    return "QuranBook";
  }
}
