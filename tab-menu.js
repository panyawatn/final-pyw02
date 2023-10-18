import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import globalStyles from './global-styles'

export default function TabMenu({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18, marginBottom:10 }}>Menu Screen</Text>
            <Text style={{ fontSize: 18, marginBottom:10 }}>Sign up</Text>
            <Text style={{ fontSize: 18, marginBottom:10 }}>Sign in</Text>
        </View>
    )
}


const styles = StyleSheet.create({

})
