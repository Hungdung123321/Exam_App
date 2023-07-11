import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { scale } from 'react-native-utils-scale'
import { APP_FONTS } from '../../assets/fonts'
import { FONT_SIZE } from '../../constants/style'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    logo: {
        height: scale(400),
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo_app: {
        marginTop: scale(32)
    },
    loginFont: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.Medium,
    },
    input_group: {
        alignSelf: 'center'
    },
    button_group: {
        marginTop: scale(24),
        alignSelf: 'center'
    },
    footer_group: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: scale(24)
    },
    footer_text: {
        fontFamily: APP_FONTS.MEDIUM,
        fontSize: FONT_SIZE.XXNormal,
        color: COLORS.BLACK
    },
    register_button_content: {
        color: COLORS.BLACK,
        fontFamily: APP_FONTS.SEMI_BOLD,
        fontSize: FONT_SIZE.XXNormal
    },
    space: {
        paddingVertical: scale(8)
    },
    savepass_group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(28)
    },
    save_pass_font: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        fontSize: FONT_SIZE.XXNormal,
        color: COLORS.BLACK_OLIVE
    }
})

export default styles
