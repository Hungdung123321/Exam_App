import React, { useState } from 'react'
import styles from './style'
import { AppButton, AppText, AppView } from '../../components'
import { Image } from 'react-native'
import { UEF_LOGO } from '../../assets/imgs'
import { APP_TEXT_TYPE, APP_VIEW_TYPE } from '../../constants/common'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../constants/ScreenName'
import { API } from '../../services/RestApi/Api'

const Login = () => {

    const [Account, setAccount] = useState(null)
    const [Password, setPassword] = useState(null)
    const navigation = useNavigation();

    const handleLogin = () => {
        if (Account === null || Password === null) {
            console.log('ko nhap acc or pass')
            return;
        }
        fetch(API + '/' + Account + '/' + Password)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    navigation.navigate(SCREEN_NAME.DETAIL)
                } else {
                    console.log('TK MK ko dung')
                }
            })
            .catch(Error => console.log(Error))
    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image source={UEF_LOGO} />
            </AppView>
            <AppText
                style={[styles.TextInputAccount]}
                TYPE={APP_TEXT_TYPE.TEXT_INPUT}
                placeholder={'Nhap Tai Khoan'}
                onEndEditing={(value) => setAccount(value.nativeEvent.text || null)}
            />
            <AppText
                style={styles.TextInputAccount}
                TYPE={APP_TEXT_TYPE.TEXT_INPUT}
                placeholder={'Nhap Mat Khau'}
                onEndEditing={(value) => setPassword(value.nativeEvent.text || null)}
            />
            <AppButton
                styleButton={styles.LoginBtn}
                content={'Login'}
                styleContent={{ color: 'white' }}
                onPressButton={handleLogin}
            />
        </AppView>
    )
}

export default Login
