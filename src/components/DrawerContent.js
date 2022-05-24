import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Icon } from '@rneui/themed'
import {colors} from '../global/styles'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const DrawerContent = (props) => {
  return (
      <View style={{flex:1}}>
          <DrawerContentScrollView {...props}>
          <View style={{alignItems: 'center',  backgroundColor:colors.buttons,paddingLeft:20,paddingVertical:10}}>
              <Avatar
                  rounded
                      avatarStyle={style.avatar}
                      size={65}
                  source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png" }}
                  />
                  <View style={{marginLeft:10}}>

                      <Text style={{ fontSize: 18, color: colors.headerText, fontWeight: 'bold' }}>Jacob Moracha </Text>
                      <Text style={{ fontSize: 12, color: colors.headerText, fontWeight: 'bold' }}>Jacobmoracha@gmail.com</Text>
                  </View>
                  <View>
                  <View style={{flexDirection: 'row',marginTop:10}}>
                      <View style={{ marginTop:10,alignItems: 'center',justifyContent: 'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.pageBackground }}>10</Text>
                          <Text style={{ fontSize: 12,fontWeight: 'bold', color: colors.pageBackground}}>My Favourites</Text>
                        </View>

                  </View>
                  <View style={{flexDirection: 'row',marginTop:10}}>
                      <View style={{ marginTop:10,alignItems: 'center',justifyContent: 'center'}}>
                          <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.pageBackground }}>0</Text>
                          <Text style={{ fontSize: 12,fontWeight: 'bold', color: colors.pageBackground}}>My Cart</Text>
                        </View>

                </View></View>
              </View>


              <DrawerItemList {...props} />

          </DrawerContentScrollView>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    avatar: {
        borderWidth: 4, 
        borderColor: colors.buttons,
        borderRadius:30
    }
})

export default DrawerContent
