import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { fontScale, scale } from 'react-native-utils-scale'
import { APP_FONTS } from '../../assets/fonts'
import { FONT_SIZE } from '../../constants/style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        paddingVertical: scale(8)
    },
    logo: {
        height: scale(200),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInputAccount: {
        marginBottom: scale(20)
    },
    input_group: {
        alignItems: 'center'
    },
    loginFont: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.Medium
    },
    button_group: {
        marginTop: scale(24),
        alignSelf: 'center'
    },
    space: {
        paddingVertical: scale(8)
    }
})

export default styles
