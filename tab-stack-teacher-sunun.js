import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackMemberSignup({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Image
        style={{
          resizeMode: "contain",
          height: 300,
          width: 300,
          marginBottom: 10,
        }}
        source={require("./assets/ts.jpg")}
      />
      <Text style={{ fontSize: 18 }}>อ.สุนันต์  สุขเจริญ</Text>

            <Text style={{ fontSize: 18 }}>Sunun  Sukcharuen {'\n'}</Text>

            <Text style={{ fontSize: 16 }}>
                การศึกษา {'\n'}
                ปริญญาตรี: วิทยาศาสตร์บัณฑิต (วท.บ.){'\n'}
                สาขาวิชา: เทคโนโลยีคอมพิวเตอร์{'\n'}
            </Text>

            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({

})
