import React, { useState } from 'react'
import { Alert } from 'react-native'
import { AppButton, AppView, InputForm } from "../../components"
import { APP_VIEW_TYPE } from '../../constants/common'
import { Image } from 'react-native'
import { IMG_app_Logo } from '../../assets/imgs'
import { API } from '../../services/RestApi/Api'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const CreatAccount = () => {

    const [Account, setAccount] = useState('')
    const [Gmail, setGmail] = useState('')
    const [Password, setPassword] = useState('')
    const [StudentID, setStudentID] = useState('')
    const navigation = useNavigation();


    const HandleCreatAccount = () => {
        if (
            Account === '' || Password === '' ||
            Gmail === '' || StudentID === ''
        ) {
            Alert.alert('Chua nhap acc or pass')
            return;
        }
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
                studentId: StudentID
            }),
        });
        navigation.goBack()
    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image source={IMG_app_Logo} />
            </AppView>
            <InputForm
                label={'Nhập Gmail'}
                placeholder={'Nhập Gmail'}
                regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                invaildMessage={'Please enter a valid email'}
                setText={(text) => setGmail(text)}
            />
            <InputForm
                label={'Tài Khoản'}
                placeholder={'Nhập Tài Khoản'}
                setText={(text) => setAccount(text)}
            />
            <InputForm
                label={'Password'}
                placeholder={'Nhập Mật Khẩu'}
                setText={(text) => setPassword(text)}
                regex={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/}
                invaildMessage={'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:'}
            />
            <InputForm
                label={'StudentID'}
                placeholder={'Nhập mã số sinh viên'}
                setText={(text) => setStudentID(text)}
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
