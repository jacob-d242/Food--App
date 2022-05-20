import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen'
import SigninScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import RestrauntsMapScreen from '../screens/RestrauntsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SignInwelcomeScreen"
                component={SigninWelcomeScreen}
                options={{
                    headerShown: false,
                    
                    }}
            />
             <Stack.Screen
                name="SignInScreen"
                component={SigninScreen}
                options={{
                    headerShown: false,
                    
                    }}
            />
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    
                    }}
            />

        <Stack.Screen
                name="RestrauntsMapScreen"
                component={RestrauntsMapScreen}
                options={{
                    headerShown: false,
                    
                    }}
            />

            
        </Stack.Navigator>    
    )
}
