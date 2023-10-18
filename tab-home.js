import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import globalStyles from "./global-styles";

export default function TabHome({ navigation }) {
  return (
    <View style={globalStyles.container}>
      
      <Image
        style={{
          resizeMode: "cover",
          height: 200,
          width: 400,
          marginBottom: 50,
        }}
        source={require("./assets/bg-home.png")}
      />

      <Image
        style={{
          resizeMode: "cover",
          height: 200,
          width: 400,
          marginBottom: 50,
        }}
        source={require("./assets/img-home1.jpeg")}
      />

      <Text style={{ fontSize: 18 }}>แผนกวิชาเทคโนโลยีคอมพิวเตอร์</Text>
      <Text style={{ fontSize: 18 }}>วิทยาลัยเทคนิคตระการพืชผล</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
