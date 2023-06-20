import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import AppText from '../AppText';
import AppView from '../AppView';

const AppButton = ({
    content,
    styleContent,
    onPressButton,
    styleButton = {},
    hitSlop = 1.5,
    ...restButton
}) => {
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
        <TouchableOpacity onPress={onPressButton} style={styleButton} hitSlop={hitSlop} {...restButton}>
            {renderContent(content, styleContent)}
        </TouchableOpacity>
    );
};

export default AppButton;
