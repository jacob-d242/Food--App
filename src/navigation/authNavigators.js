import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen'
import SigninScreen from '../screens/authScreens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
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
                name="HomScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    
                    }}
            />

            
        </Stack.Navigator>    
    )
}
