import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Icon } from '@rneui/themed'
import ClientTabs from '../navigation/ClientTabs'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator>
          {/*<Drawer.Screen
              name='ClientTabs'
              component={ClientTabs}
              options={
                  {
                      title='Client',
                      drawerIcon: ({ focused, size }) => (
                          Icon
                            type='material-community',
                      name ="home",
                            color={focused ? '#7cc'}
                          />
                      )
                  }
              }*/}

          />
          
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
