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
        source={require("./assets/tp.jpg")}
      />
      <Text style={{ fontSize: 18 }}>อ.ปัญญวัฒน์ สุภาคาร</Text>

            <Text style={{ fontSize: 18 }}>Panyawatn Suphakarn {'\n'}</Text>

            <Text style={{ fontSize: 16 }}>
                การศึกษา {'\n'}
                ปริญญาตรี: ครุศาสตร์อุตสาหกรรมบัณฑิต (ค.อ.บ.){'\n'}
                สาขาวิชา: วิศวกรรมคอมพิวเตอร์{'\n'}
            </Text>

            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({

})
