import React from 'react'
import { Alert } from 'react-native'
import AppView from '../AppView'
import AppText from '../AppText'
import { APP_TEXT_TYPE, EMPTY_STRING } from '../../constants/common'
import styles from './style'


const InputForm = (props) => {
    const { label, onEndEdit, styleInput, placeholder } = props;

    return (
        <AppView style={styles.container}>
            <AppText
                style={styles.labelDefault}>
                {label || EMPTY_STRING}
            </AppText>
            <AppText style={styles.padding} />
            <AppText
                style={styleInput}
                TYPE={APP_TEXT_TYPE.TEXT_INPUT}
                placeholder={placeholder || EMPTY_STRING}
                onEndEditing={onEndEdit}
            />
        </AppView>
    )
}

export default InputForm
