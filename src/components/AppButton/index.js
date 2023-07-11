import { TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from '../AppText';
import AppView from '../AppView';
import { APP_BUTTON_TYPE } from '../../constants/common';
import styles from './style'

const AppButton = ({
    type = APP_BUTTON_TYPE.DEFAULT,
    content,
    styleContent,
    onPressButton,
    styleButton = {},
    hitSlop = 1.5,
    ...restButton
}) => {

    const changeTypeButton = (type) => {
        switch (type) {
            case APP_BUTTON_TYPE.DEFAULT:
                return styleButton;
            case APP_BUTTON_TYPE.LOGIN:
                return [styles.LoginBtn]
            case APP_BUTTON_TYPE.GOOGLE_LOGIN:
                return [styles.LoginBtnGG]
        }
    }

    const renderContent = (content, style) => {
        if (!content) {
            return null;
        }

        switch (typeof content) {
            case 'string':
            case 'number':
                return <AppText style={style}>{content}</AppText>;

            case 'function':
                return <AppView style={style}>{content?.()}</AppView>;

            default:
                return <AppView />;
        }
    };

    return (
        <TouchableOpacity onPress={onPressButton} style={changeTypeButton(type)} hitSlop={hitSlop} {...restButton}>
            {renderContent(content, styleContent)}
        </TouchableOpacity>
    );
};

export default AppButton;
