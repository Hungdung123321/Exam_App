import { StyleSheet } from 'react-native'
import { scale } from 'react-native-utils-scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    LoginBtn: {
        width: scale(400),
        backgroundColor: COLORS.OUTER_SPACE,
        borderRadius: 8,
        paddingVertical: scale(16),
        alignItems: 'center',
    },
    LoginBtnGG: {
        width: scale(400),
        borderRadius: 8,
        paddingVertical: scale(16),
        borderWidth: 1,
        borderColor: '#B6B6B6',
    }
})

export default styles;