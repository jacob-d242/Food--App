import { Icon } from '@rneui/base'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { parameters,colors } from '../global/styles'
const header = ({tittle,type,navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 25 }}>
      <Icon
          size={20}
          name={type}
          type='material-community'
          onPress={() => {
            navigation.goBack()
          }
          }
        />
      </View>
      <View>
        <Text style={styles.headerText}>
          {tittle}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {

    flexDirection : 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    height: 60
  },
    
  headerText: {
    alignItems: 'center',
    color: colors.headerText,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 35
}
})
export default header
