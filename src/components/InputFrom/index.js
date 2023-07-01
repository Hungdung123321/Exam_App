import React, { useState } from 'react'
import AppView from '../AppView'
import AppText from '../AppText'
import { APP_TEXT_TYPE, EMPTY_STRING } from '../../constants/common'
import styles from './style'


const InputForm = (props) => {
    const {
        label,
        setText,
        styleInput,
        placeholder,
        regex = null,
        invaildMessage
    } = props;
    const [validationMessage, setValidationMessage] = useState('');

    const handleEdit = (value) => {
        setText?.(value.nativeEvent.text)
        if (regex) {
            validate(value.nativeEvent.text)
        }
    }

    const validate = (text) => {
        const isValid = regex?.test(text);
        if (!isValid) {
            setValidationMessage(invaildMessage);
        } else {
            setValidationMessage('');
        }
    };

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
                onEndEditing={handleEdit}
            />
            <AppText style={{ color: 'red' }}>{validationMessage}</AppText>
        </AppView>
    )
}

export default InputForm
