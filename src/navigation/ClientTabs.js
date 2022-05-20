import React from 'react'
import { Icon } from '@rneui/themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import SearchScreen from '../screens/SearchScreen'

import {colors} from '../global/styles'

const ClientTab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <ClientTab.Navigator
      screenOptions={{
        headerShown: false,
      tabBarActiveTintColor: colors.buttons,
    }}
    >
      <ClientTab.Screen
        name ="Home"
        component={HomeScreen}
        options={
        
          {
            
            tabBarLabel :"Home",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="home"
                type="material-community"
                color={color}
                size={size}
              />
            )
          }
        }
      />

      <ClientTab.Screen
        name ="Search Screen"
        component={SearchScreen}
        options={
          {
            tabBarLabel :"Search",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="search"
                type="AntDesign"
                color={color}
                size={size}
              />
            )
          }
        }
      />
      
       <ClientTab.Screen
        name ="My Orders"
        component={MyOrdersScreen}
        options={
          {
            tabBarLabel :"My Orders",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="view-list"
                type="material-community"
                color={color}
                size={size}
              />
            )
          }
        }
      />
      
       <ClientTab.Screen
        name ="My Account"
        component={MyAccountScreen}
        options={
          {
            tabBarLabel :"My Account",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="person"
                type="Octicons"
                color={color}
                size={size}
              />
            )
          }
        }
      />

      </ClientTab.Navigator>
  )
}

export default ClientTabs
