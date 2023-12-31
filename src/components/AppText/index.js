import { Text, TextInput } from 'react-native'
import React from 'react'
import { APP_TEXT_TYPE } from '../../constants/common'
import styles from './style'

const AppText = ({ TYPE = APP_TEXT_TYPE.TEXT, children, style, ...rest }) => {

    switch (TYPE) {

        case APP_TEXT_TYPE.TEXT:
            return <Text style={style}>{children}</Text>

        case APP_TEXT_TYPE.TEXT_INPUT:
            return <TextInput
                style={[styles.TextInputDefault, style]}
                {...rest}
            />
    }
}

export default AppText;
