import React from 'react'
import Header from '../../components/Header'

import { View, Text, StyleSheet, TextInput,Image } from 'react-native'
import { colors, tittle,parameters } from '../../global/styles'

import * as Animatable from 'react-native-animatable'

import { Button, Icon,SocialIcon } from '@rneui/base'
import Swiper from 'react-native-swiper'

const SigninWelcomeScreen = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
            
      
         <View style={{flex: 3,justifyContent: 'flex-start',alignItems:    'center',paddingTop:20}}>
       
          <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>Discover A better Way to Shop</Text>
          <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>Convinience At you comfort</Text> 
        </View>
        <View style={{flex:4,justifyContent: 'center'}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://wallpapersdsc.net/wp-content/uploads/2016/09/Junk-Food-Pictures.jpg" }}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://unsplash.com/photos/WCyjPJBzSAU" }}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://unsplash.com/photos/r4QVfQtytQ4" }}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://unsplash.com/photos/fDPRJxJMJu4" }}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4 }}>
            <View style={{marginHorizontal:20, marginTop:30}}>
                 <Button
                     title="SIGN-IN"
                          buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => {
                            navigation.navigate("SignInScreen")
                        }}
                  />
             </View>
                <View style={{marginHorizontal:20,marginTop: 20 }}>
                    <Button
                    title="create a new account "
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
    ,
    createButtonTitle: {
      color:colors.grey1,
      fontSize: 20,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      marginTop:-3
    },
    createButton: {
      backgroundColor: "white",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.buttons,
      height: 40,
      paddingHorizontal:20,
    }
})

export default SigninWelcomeScreen;