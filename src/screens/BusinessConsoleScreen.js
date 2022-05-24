import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from '@rneui/themed'

const BusinessConsoleScreen = () => {
  return (
      <View style={styles.container}>
          <Text>
              business console
          </Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BusinessConsoleScreen
