import React, { useState } from 'react'
import { Alert } from 'react-native'
import { AppButton, AppView, GoogleLoginButton, InputForm } from "../../components"
import { APP_BUTTON_TYPE, APP_VIEW_TYPE } from '../../constants/common'
import { Image } from 'react-native'
import { IMG_app_logo } from '../../assets/imgs'
import { API } from '../../services/RestApi/Api'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const CreatAccount = () => {

    const [Account, setAccount] = useState('');
    const [Gmail, setGmail] = useState('');
    const [Password, setPassword] = useState('');
    const [StudentID, setStudentID] = useState('');
    const navigation = useNavigation();

    const pushNewUser = () => {
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
                info: {

                    fullName: '',
                    studentId: StudentID
                },
                done_exercises: []
            }),
        })
            .then(res => {
                if (res.status === 409) {
                    Alert.alert('tk ton tai')
                } else {
                    navigation.goBack();
                }
            })
    }

    const HandleCreatAccount = () => {
        if (
            Account === '' || Password === '' ||
            Gmail === '' || StudentID === ''
        ) {
            Alert.alert('Chua nhap acc or pass')
            return;
        }
        pushNewUser()
    }

    return (
        <AppView type={APP_VIEW_TYPE.SCROLL_VIEW} style={styles.container}>
            <AppView style={styles.logo}>
                <Image style={styles.logo_app} source={IMG_app_logo} />
            </AppView>
            <AppView style={styles.input_group}>
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
                    label={'Nhập Gmail'}
                    placeholder={'Nhập Gmail'}
                    regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                    invaildMessage={'Please enter a valid email'}
                    setText={(text) => setGmail(text)}
                />
                <InputForm
                    label={'StudentID'}
                    placeholder={'Nhập mã số sinh viên'}
                    setText={(text) => setStudentID(text)}
                />
            </AppView>
            <AppView style={styles.button_group}>
                <AppButton
                    type={APP_BUTTON_TYPE.LOGIN}
                    content={'Đăng ký'}
                    styleContent={styles.loginFont}
                    onPressButton={HandleCreatAccount}
                />
                <AppView style={styles.space} />
                <GoogleLoginButton />
            </AppView>
        </AppView>
    )
}

export default CreatAccount
