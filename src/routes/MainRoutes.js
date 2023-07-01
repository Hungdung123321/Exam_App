import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SCREEN_NAME } from '../constants/ScreenName'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/Login.js'
import CreatAccount from '../screens/CreatAccount'
import CustomDrawer from './CustomDrawer'
import { Image } from 'react-native'
import { IC_HomeSidebar, IC_Subjects } from '../assets/icons'
import styles from './style'
import { COLORS } from '../constants/colors'

const MainStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: styles.LabelStyle,
                drawerActiveBackgroundColor: COLORS.MANTIS,
                drawerActiveTintColor: COLORS.WHITE,
                drawerInactiveTintColor: COLORS.BLACK_COW
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen name={SCREEN_NAME.HOME} component={Home} options={{
                drawerIcon: ({ color }) => {
                    return <Image source={IC_HomeSidebar} style={{ tintColor: color }} />
                }
            }} />
            <Drawer.Screen name={SCREEN_NAME.DETAIL} component={Detail} options={{
                drawerIcon: ({ color }) => {
                    return <Image source={IC_Subjects} style={{ tintColor: color }} />
                }
            }} />
        </Drawer.Navigator>
    )
}

const MainRoutes = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={SCREEN_NAME.LOGIN} component={Login} />
                <MainStack.Screen name={SCREEN_NAME.CREAT_ACCOUNT} component={CreatAccount} />
                <MainStack.Screen name={SCREEN_NAME.HOME_DRAWER} component={HomeDrawer} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes

