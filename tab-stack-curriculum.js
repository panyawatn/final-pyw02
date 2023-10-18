import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import globalStyles from "./global-styles";

export default function TabStackCurriculum({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Image
        style={{
          resizeMode: "contain",
          height: 200,
          width: 300,
          marginBottom: 10,
        }}
        source={require("./assets/l1.jpg")}
      />
      <Text style={{ fontSize: 18 }}>ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</Text>
      <Text style={{ fontSize: 16 }}>สาขาวิชาช่างเทคนิคคอมพิวเตอร์{"\n"}</Text>

      <Image
        style={{
          resizeMode: "contain",
          height: 200,
          width: 300,
          marginBottom: 10,
        }}
        source={require("./assets/l2.jpg")}
      />

      <Text style={{ fontSize: 18 }}>
        ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
      </Text>
      <Text style={{ fontSize: 16 }}>สาขาวิชาเทคโนโลยีคอมพิวเตอร์ {"\n"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
