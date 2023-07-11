import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';
import { scale } from 'react-native-utils-scale';
import { APP_FONTS } from '../../assets/fonts';
import { FONT_SIZE, LINE_HEIGHT } from '../../constants/style';

const styles = StyleSheet.create({
    container: {
        width: scale(400),
    },
    labelDefault: {
        fontFamily: APP_FONTS.MEDIUM,
        fontSize: FONT_SIZE.Medium,
        lineHeight: LINE_HEIGHT.Tiny,
        color: COLORS.BLACK_OLIVE,
        paddingVertical: scale(8)
    },
})

export default styles;