import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ScreenOne, ScreenTwo } from '../Screens'
import { Home, Globe } from '../svg'


const Tab = createBottomTabNavigator()

const Navigation = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ScreenOne'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false
                }}
            >
                <Tab.Screen
                    name='ScreenOne'
                    component={ScreenOne}
                    options={{
                        tabBarIcon: ({ color }) => <Home color={color} />
                    }}
                />
                <Tab.Screen
                    name='ScreenTwo'
                    component={ScreenTwo}
                    options={{
                        tabBarIcon: ({ color }) => <Globe color={color} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation