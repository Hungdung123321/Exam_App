import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { SCREEN_NAME } from '../constants/ScreenName'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/Login.js'
import CreatAccount from '../screens/CreatAccount'

const MainStack = createNativeStackNavigator()

const MainRoutes = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
                <MainStack.Screen name={SCREEN_NAME.CREAT_ACCOUNT} component={CreatAccount} />
                <MainStack.Screen name={SCREEN_NAME.HOME} component={Home} />
                <MainStack.Screen name={SCREEN_NAME.DETAIL} component={Detail} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes

