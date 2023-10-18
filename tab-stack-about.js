import React, {useCallback} from 'react';
//import React from "react";
import { StyleSheet, View, Text, Button, Image, Linking, Alert } from "react-native";
import globalStyles from "./global-styles";

const webURL = 'https://tkc.ac.th/';
const facebookURL = 'https://www.facebook.com/com.tkc/';


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


export default function TabStackAbout({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Image
        style={{
          resizeMode: "contain",
          height: 300,
          width: 400,
          marginBottom: 10,
        }}
        source={require("./assets/tkc.jpeg")}
      />
      <Text style={{ fontSize: 18, fontWeight:'bold' }}>แผนกวิชาเทคโนโลยีคอมพิวเตอร์</Text>
      <Text style={{ fontSize: 16 }}>วิทยาลัยเทคนิคตระการพืชผล{"\n"}</Text>

      <Text style={{ fontSize: 14 }}>เปิดทำการเรียนการสอน เมื่อปี พ.ศ. 2561</Text>
      <Text style={{ fontSize: 14 }}>ปัจจุบันมีนักเรียน นักศึกษา ดังนี้ {"\n"}</Text>
      <Text style={{ fontSize: 14 }}>ปวช.1 ช่างเทคนิคคอมพิวเตอร์, 2566</Text>
      <Text style={{ fontSize: 14 }}>ปวช.2 ช่างเทคนิคคอมพิวเตอร์, 2565</Text>
      <Text style={{ fontSize: 14 }}>ปวช.3 ช่างเทคนิคคอมพิวเตอร์, 2564</Text>
      <Text style={{ fontSize: 14 }}>ปวส.1 เทคโนโลยีคอมพิวเตอร์, 2566{"\n"}</Text>

     
      <OpenURLButton url={webURL}>WebSite</OpenURLButton>
      <OpenURLButton url={facebookURL}>FaceBook</OpenURLButton>
    </View>
  );
}

const styles = StyleSheet.create({});
