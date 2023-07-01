import React, { useState } from 'react'
import { Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AppButton, AppText, AppView, InputForm } from '../../components'
import { IC_Logo_Google, IMG_app_Logo } from '../../assets/imgs'
import { APP_VIEW_TYPE } from '../../constants/common'
import { SCREEN_NAME } from '../../constants/ScreenName'
import { API } from '../../services/RestApi/Api'
import styles from './style'

const Login = () => {

    const [Account, setAccount] = useState('')
    const [Password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleLogin = () => {
        if (Account === '' || Password === '') {
            Alert.alert('Chua nhap acc or pass')
            return;
        }
        fetch(API + '/' + Account + '/' + Password)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    navigation.navigate(SCREEN_NAME.HOME_DRAWER)
                } else {
                    Alert.alert('Mat Khau Ko dung')
                }
            })
            .catch(Error => console.log(Error))
    }

    const renderContentImgOfBtn = () => {
        return (
            <>
                <Image style={styles.styleGGlogo} source={IC_Logo_Google} />
                <AppText style={styles.loginGGFont}>Sign in with Google</AppText>
            </>
        )
    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image source={IMG_app_Logo} />
            </AppView>
            <InputForm
                label={'Tài Khoản'}
                placeholder={'Nhập Tài Khoản'}
                setText={(text) => setAccount(text)}
            />
            <InputForm
                label={'Mật Khẩu'}
                placeholder={'Nhập Mật Khẩu'}
                setText={(text) => setPassword(text)}
            />
            <AppButton
                styleButton={styles.LoginBtn}
                content={'Đăng Nhập'}
                styleContent={styles.loginFont}
                onPressButton={handleLogin}
            />
            <AppButton
                styleButton={[styles.LoginBtn, styles.LoginBtnGG]}
                content={renderContentImgOfBtn}
                styleContent={styles.loginGoogleContent}
            />
            <AppButton
                styleButton={styles.CreatBtn}
                content={'Đăng kí ?'}
                styleContent={styles.CreatBtnFont}
                onPressButton={() => navigation.navigate(SCREEN_NAME.CREAT_ACCOUNT)}
            />
        </AppView>
    )
}

export default Login
