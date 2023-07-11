import React from 'react'
import { Image } from 'react-native'
import AppButton from '../AppButton'
import { APP_BUTTON_TYPE } from '../../constants/common'
import { IC_Logo_Google } from '../../assets/imgs'
import AppText from '../AppText'
import styles from './style'

const GoogleLoginButton = ({ onPress }) => {
    return (
        <AppButton type={APP_BUTTON_TYPE.GOOGLE_LOGIN} styleContent={styles.google_button_content} content={() =>
            <>
                <Image source={IC_Logo_Google} />
                <AppText style={styles.google_font}>   Sign in with Google</AppText>
            </>
        } onPressButton={onPress} />
    )
}

export default GoogleLoginButton
