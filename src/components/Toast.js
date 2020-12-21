import React, { useEffect } from "react";
import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";
import { useSelector } from "react-redux";

import { Color } from "../config/color";
import { whichToast } from "../config/QuranContent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../config/screen-responsive";

export default Toast = ({ hendelOnPress }) => {
  const lanscape = wp("100") > hp("100") ? true : false; // screen orientation

  const opacity = new Animated.Value(0);
  const animatedStyles = { opacity };
  const currentPage = useSelector((state) => state.currentPage);

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
      duration: 1500,
      easing,
      useNativeDriver: true,
    }).start();
  };

  const Render = ({ type }) => {
    useEffect(() => {
      animateShow(Easing.circle);
    });

    return (
      <Animated.View
        style={[
          {
            position: "absolute",
            width: 100,
            height: 100,
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            zIndex: 1,
            margin: lanscape ? hp("70") : hp("75"),
            backgroundColor: "toamto",
          },
          animatedStyles,
        ]}
      >
        <Pressable onPress={() => hendelOnPress()}>
          <View style={styles.firstView} />
          <View style={styles.secondView}>
            <Image
              style={{
                alignSelf: "flex-end",
                height: 80,
                width: 80,
                transform: [{ rotateZ: "-45deg" }, { translateX: 22 }],
              }}
              source={
                type === "hezib"
                  ? require("../assets/images/hezib.png")
                  : type === "nesif"
                  ? require("../assets/images/nesif.png")
                  : require("../assets/images/roboaa.png")
              }
            />
          </View>
        </Pressable>
      </Animated.View>
    );
  };

  return whichToast(currentPage) === "H" ? (
    <Render type="hezib" />
  ) : whichToast(currentPage) === "N" ? (
    <Render type="nesif" />
  ) : whichToast(currentPage) === "R" ? (
    <Render type="roboaa" />
  ) : null;
};
const styles = StyleSheet.create({
  firstView: {
    width: 55,
    height: 53,
    backgroundColor: Color.note,
    //#fff4a1
  },
  secondView: {
    position: "absolute",
    width: 53,
    height: 52,
    backgroundColor: Color.note,
    borderWidth: 1,
    borderColor: Color.note,
    transform: [{ rotateZ: "45deg" }],
  },
});
// export default class Toast extends React.Component {
//   constructor(prop) {
//     super(prop);
//     opacity = new Animated.Value(0);
//     animatedStyles = { opacity };
//     this.state = {
//       currentPage: this.props.startIndex,
//     };
//   }

//   // update the current index when croll change
//   updateCurrentPage = (index) => {
//     this.setState({ currentPage: index });
//   };

//   animateShow = (easing) => {
//     opacity.setValue(0);
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 10,
//       easing,
//       useNativeDriver: true,
//     }).start(({ finished }) => {
//       if (finished) this.animatehidden(Easing.circle);
//     });
//   };
//   animatehidden = (easing) => {
//     opacity.setValue(1);
//     Animated.timing(opacity, {
//       toValue: 0,
//       duration: 1500,
//       easing,
//       useNativeDriver: true,
//     }).start();
//   };

//   Render = ({ type }) => {
//     useEffect(() => {
//       this.animateShow(Easing.circle);
//     });

//     return (
//       <Animated.View style={animatedStyles}>
//         <View style={styles.firstView} />
//         <View style={styles.secondView}>
//           <Image
//             style={{
//               alignSelf: "flex-end",
//               height: 80,
//               width: 80,
//               transform: [{ rotateZ: "-45deg" }, { translateX: 22 }],
//             }}
//             source={
//               type === "hezib"
//                 ? require("../assets/hezib.png")
//                 : type === "nesif"
//                 ? require("../assets/nesif.png")
//                 : require("../assets/roboaa.png")
//             }
//           />
//         </View>
//       </Animated.View>
//     );
//   };

//   render() {
//     return whichToast(this.state.currentPage) === "H" ? (
//       <this.Render type="hezib" />
//     ) : whichToast(this.state.currentPage) === "N" ? (
//       <this.Render type="nesif" />
//     ) : whichToast(this.state.currentPage) === "R" ? (
//       <this.Render type="roboaa" />
//     ) : null;
//   }
// }
