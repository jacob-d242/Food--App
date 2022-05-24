import { Icon,withBadge} from '@rneui/base'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { parameters,colors } from '../global/styles'
const HomeHeader = ({navigation}) => {
    const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header} >
      <View style={{marginLeft: 15,alignItems: 'center',justifyContent: 'center'}}>
      <Icon
          size={25}
          name='menu'
            type='material-community'
          color={colors.cardBackground}
          onPress={() => {
            navigation.toggleDrawer()
          }}
        />
      </View>
      <View>
        <Text style={{marginLeft: 15,color:colors.cardBackground, alignItems: 'center',justifyContent: 'center',fontSize: 25}}>
          Home foods
        </Text>
          </View>
          <View style={{marginRight: 15,alignItems: 'center',justifyContent:'center'}}>
              <BadgeIcon
                  name="cart"
                  type ="material-community"
                  size={35}
                  color={colors.cardBackground}
              />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
    justifyContent:"space-between",
    flexDirection : 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight
  },
    
    headerText: {
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
}
})
export default HomeHeader