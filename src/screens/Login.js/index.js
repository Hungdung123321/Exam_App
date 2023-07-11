import React, { useState } from 'react'
import { Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { APP_BUTTON_TYPE, APP_VIEW_TYPE } from '../../constants/common'
import { API } from '../../services/RestApi/Api'
import { SCREEN_NAME } from '../../constants/ScreenName'
import { IMG_app_logo, IMG_logo1 } from '../../assets/imgs'
import { AppButton, AppText, AppView, GoogleLoginButton, InputForm } from '../../components'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { COLORS } from '../../constants/colors'
import styles from './style'


const Login = () => {

    const [Account, setAccount] = useState('');
    const [Password, setPassword] = useState('');
    const [SavePassToggle, setSavePassToggle] = useState(false);
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

    const handleLoginGoogle = () => {

    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image source={IMG_logo1} />
                <Image style={styles.logo_app} source={IMG_app_logo} />
            </AppView>
            <AppView style={styles.input_group}>
                <InputForm
                    style={styles.inputform}
                    label={'Tài Khoản'}
                    placeholder={'Nhập Tài Khoản'}
                    setText={(text) => setAccount(text)}
                />
                <InputForm
                    style={styles.inputform}
                    label={'Mật Khẩu'}
                    placeholder={'Nhập Mật Khẩu'}
                    setText={(text) => setPassword(text)}
                />
            </AppView>
            <AppView style={styles.savepass_group}>
                <BouncyCheckbox
                    size={16}
                    fillColor={COLORS.OUTER_SPACE}
                    text="Lưu mật khẩu"
                    textStyle={[{ textDecorationLine: 'none' }, styles.save_pass_font]}
                    iconStyle={{ borderRadius: 2 }}
                    innerIconStyle={{ borderRadius: 2 }}
                    onPress={({ isChecked }) => setSavePassToggle(isChecked)}
                />
                <AppButton
                    content={'Quên mật khẩu'}
                    styleContent={styles.save_pass_font}
                />
            </AppView>
            <AppView style={styles.button_group}>
                <AppButton
                    type={APP_BUTTON_TYPE.LOGIN}
                    content={'Đăng Nhập'}
                    styleContent={styles.loginFont}
                    onPressButton={handleLogin}
                />
                <AppView style={styles.space} />
                <GoogleLoginButton onPress={handleLoginGoogle} />
            </AppView>
            <AppView style={styles.footer_group}>
                <AppText style={styles.footer_text}>Bạn chưa có tài khoản?</AppText>
                <AppButton
                    content={' Đăng kí'}
                    styleContent={styles.register_button_content}
                    onPressButton={() => navigation.navigate(SCREEN_NAME.CREAT_ACCOUNT)}
                />
            </AppView>
        </AppView>
    )
}

export default Login
