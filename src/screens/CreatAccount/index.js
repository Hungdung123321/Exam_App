import React, { useState } from 'react'
import { AppButton, AppText, AppView, InputForm } from "../../components"
import { APP_VIEW_TYPE } from '../../constants/common'
import styles from './style'
import { Alert, Image } from 'react-native'
import { IMG_app_Logo } from '../../assets/imgs'
import { API } from '../../services/RestApi/Api'

const CreatAccount = () => {

    const [Account, setAccount] = useState('')
    const [Gmail, setGmail] = useState('')
    const [Password, setPassword] = useState('')

    const HandleCreatAccount = () => {
        fetch(API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                account: Account,
                password: Password,
                gmail: Gmail,
            }),
        });
    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image source={IMG_app_Logo} />
            </AppView>
            <InputForm
                label={'Nhập Gmail'}
                placeholder={'Nhập Gmail'}
                onEndEdit={(value) => setGmail(value.nativeEvent.text || '')}
            />
            <InputForm
                label={'Tài Khoản'}
                placeholder={'Nhập Tài Khoản'}
                onEndEdit={(value) => setAccount(value.nativeEvent.text || '')}
            />
            <InputForm
                label={'Password'}
                placeholder={'Nhập Mật Khẩu'}
                onEndEdit={(value) => setPassword(value.nativeEvent.text || '')}
            />
            <InputForm
                label={'Re-Password'}
                placeholder={'Nhập Mật Khẩu'}
                onEndEdit={(value) => setPassword(value.nativeEvent.text || '')}
            />
            <AppButton
                styleButton={styles.LoginBtn}
                content={'Đăng Ký'}
                styleContent={styles.loginFont}
                onPressButton={HandleCreatAccount}
            />
        </AppView>
    )
}

export default CreatAccount
