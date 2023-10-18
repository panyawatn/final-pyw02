import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import globalStyles from "./global-styles";

export default function TabStackTeacher({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Image
        style={{
          resizeMode: "contain",
          height: 200,
          width: 200,
          marginBottom: 10,
        }}
        source={require("./assets/tp.jpg")}
      />
      <Text style={{ fontSize: 18 }}>อ.ปัญญวัฒน์ สุภาคาร</Text>
      <Button
        size="sm"
        title="More.."
        onPress={() => navigation.navigate("TabStackTeacherPanyawatn")}
      />

      <Image
        style={{
          resizeMode: "contain",
          height: 200,
          width: 200,
          marginBottom: 10,
          marginTop: 30
        }}
        source={require("./assets/ts.jpg")}
      />
      <Text style={{ fontSize: 18 }}>อ.สุนันต์ สุขเจริญ</Text>
      <Button
        title="More.."
        onPress={() => navigation.navigate("TabStackTeacherSunun")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
