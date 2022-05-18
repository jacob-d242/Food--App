import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { colors, tittle,parameters } from '../../global/styles'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'
import { Button, Icon,SocialIcon } from '@rneui/base'
const SigninScreen = (navigation) => {

  const [textInput2Focused, setTestInput2Focused] = useState(false)
  const textInput1 = useRef(1)
  const textInput2 = useRef(2)


  return (
    <View style={styles.container}>
      <Header tittle="My Account" type="arrow-left" navigation={navigation} />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={tittle}>Sign-in</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter your email and password </Text>
        <Text style={styles.text1}>Registred with your account </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={500}>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"

            />
          </Animatable.View >
          <TextInput
            style={{ width: '80%' }}
            placeholder="Password"
            ref={textInput2}
            onFocus={() =>
              setTestInput2Focused(false)
            }
            onBlur={() =>
              setTestInput2Focused(true)
            }
          />
          <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
        <View style={{marginHorizontal:20, marginTop:30}}>
          <Button
            title="SIGN_IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
          />
        </View>
        <View style={{alignItems: 'center',marginTop: 15 }}>
          <Text style={{...styles.text1, textDecorationLine:"underline" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{color:"#111",fontSize:20, fontWeight: 'bold'}}>
             OR
          </Text>
        </View>


      </View>
        <View >
          <SocialIcon
            title="Sign in with Facebook"
            button
            type="facebook"
            style={styles.socialIcon}
            onPress={()=>{}}
          />
      </View>
      <View  >
          <SocialIcon
            title="Sign in with Google"
            button
            type="google"
            style={styles.socialIcon}
            onPress={()=>{}}
          />
      </View>
      
      <View style={{marginTop: 10,marginLeft:30 }}>
          <Text style={{...styles.text1,  }}>
            New to Food app ?
          </Text>
      </View>

      <View style={{alignItems:"flex-end",marginHorizontal:20}}>

        <Button
          title="create a new account "
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>

    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  textInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,

  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 15,

  },
  socialIcon: {
    marginHorizontal: 20,
    marginRight: 35,
    borderRadius: 12,
    height: 50,
    width: "90%"
  },
  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
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
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal:20,
  }
})