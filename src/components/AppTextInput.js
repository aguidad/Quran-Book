import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} {...otherProps} />
      {icon && (
        <Ionicons style={styles.icon} name={icon} size={25} color="#6e6969" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "95%",
    flexDirection: "row",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  icon: { marginLeft: 20 },
  text: {
    color: "#0c0c0c",
    fontFamily: "Arabic",
    fontSize: 18,
    width: "90%",
    textAlignVertical: "top",
    textAlign: "right",
  },
});

export default AppTextInput;
