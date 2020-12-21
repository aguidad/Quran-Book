import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Animated, Easing, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Color } from "../config/color";

function NoteScreen() {
  const marker = useSelector((state) => state.marker);
  const currentPage = useSelector((state) => state.currentPage);
  const opacity = new Animated.Value(0);
  const animatedStyles = { opacity };

  const animateShow = (easing) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      easing,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) animatehidden(Easing.circle);
    });
  };

  const animatehidden = (easing) => {
    opacity.setValue(1);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 3000,
      easing,
      useNativeDriver: true,
    }).start();
  };

  const Render = () => {
    useEffect(() => {
      animateShow(Easing.circle);
    });
    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            flexDirection: "row",
            top: -32,
            width: 170,
            height: 170,
            justifyContent: "space-between",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          },
          animatedStyles,
        ]}
      >
        <Entypo
          style={{ width: 170 }}
          name="bookmark"
          size={120}
          color={Color.note}
        />
      </Animated.View>
    );
  };

  return marker === currentPage && marker !== -1 ? <Render /> : null;
}
export default NoteScreen;
