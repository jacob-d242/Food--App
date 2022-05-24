import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Icon } from '@rneui/themed'
import ClientTabs from '../navigation/ClientTabs'
import {colors} from  '../global/styles'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'

import DrawerContent from '../components/DrawerContent'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >
          <Drawer.Screen
              name='ClientTabs'
              component={ClientTabs}
           options={{
          title: 'client',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              type='material-community'
              name="home"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
              
            />
          )
              }}
      />
      
          <Drawer.Screen
              name='Business Console'
              component={BusinessConsoleScreen}
           options={{
          title: 'Business Console',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              type='MaterialIcons'
              name="business"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
              
            />
          )
              }}
          />
          
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
