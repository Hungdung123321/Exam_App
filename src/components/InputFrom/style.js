import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';
import { fontScale, scale } from 'react-native-utils-scale';
import { APP_FONTS } from '../../assets/fonts';

const styles = StyleSheet.create({
    container: {
        paddingVertical: scale(8)
    },
    labelDefault: {
        fontFamily: APP_FONTS.MEDIUM,
        fontSize: fontScale(16),
        color: COLORS.BLACK_OLIVE
    },
    padding: {
        height: scale(8)
    }
})

export default styles;