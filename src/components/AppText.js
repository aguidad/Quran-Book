import React from "react";
import { Text } from "react-native";

function AppText({ children, style }) {
  return (
    <Text
      style={[
        {
          color: "#0c0c0c",
          fontSize: 18,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default AppText;
