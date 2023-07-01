import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { AppView } from '../../components'
import { Image } from 'react-native'
import { IMG_app_Logo } from '../../assets/imgs'
import styles from './style'

const CustomDrawer = (props) => {

    return (
        <AppView style={styles.container}>
            <AppView style={styles.container__boxImg}>
                <Image source={IMG_app_Logo} />
            </AppView>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </AppView>
    )
}

export default CustomDrawer
