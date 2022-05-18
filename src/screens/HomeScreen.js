import { Icon } from '@rneui/themed'
import React, {useState} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import {colors,parameters} from '../global/styles'
const HomeScreen = () => {

    const [delivery, setDelivery] = useState(true)

    return (
      <View style={styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
               
            >
                <View>
            <View style={{marginTop:8,flexDirection:'row',justifyContent:'space-evenly'}}>
                <TouchableOpacity
                    onPress={() => {
                        setDelivery(true);
                    }}
                >
                    <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons : colors.grey5}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setDelivery(false);
                    }}
                >
                    <View style={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5 : colors.buttons}}>
                        <Text style={styles.deliveryText}>Pick Up</Text>
                    </View>
                </TouchableOpacity>
                </View>
                    </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:"row",alignItems: 'center'}}>
                        <Icon
                            type="material-community"
                            name="map-marker"
                            color={colors.grey1}
                            size={25}
                        />
                    <Text style={{marginLeft:5, color: colors.buttons,  }}>80100 Mombasa ke</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:'center',marginLeft:'20'}}>
                        <Icon
                            type="material-community"
                            name="clock-time-four"
                            color={colors.grey1}
                            size={25}
                        />
                    <Text style={{marginLeft:5, color: colors.buttons,  }}>Now</Text>
                    </View>
                </View>

                </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryButton: {
        paddingHorizontal: 20, 
        borderRadius: 12,
        paddingVertical: 5,
        
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,
    }
})

export default HomeScreen