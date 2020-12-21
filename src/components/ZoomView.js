import React, { Component } from "react";
import { ScrollView, Image, Pressable } from "react-native";
import { Color } from "../config/color";
export default class ZoomView extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }} //flexbox styles
        centerContent //centers content when zoom is less than scroll view bounds
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ overflow: "hidden" }}
      >
        <Pressable
          style={{ backgroundColor: Color.primary }}
          onPress={() => this.props.hendelOnPress()}
        >
          <Image
            source={this.props.source}
            style={{ width: this.props.zoomWidth }}
            resizeMode="center"
            resizeMethod="scale"
          />
        </Pressable>
      </ScrollView>
    );
  }
}
