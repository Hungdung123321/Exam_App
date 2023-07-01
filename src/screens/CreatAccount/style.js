import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { fontScale, scale } from 'react-native-utils-scale'
import { APP_FONTS } from '../../assets/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: scale(16),
    },
    logo: {
        height: scale(272),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInputAccount: {
        marginBottom: scale(20)
    },
    LoginBtn: {
        width: '100%',
        backgroundColor: COLORS.OUTER_SPACE,
        borderRadius: 8,
        paddingVertical: scale(16),
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: scale(40)
    },
    loginFont: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        color: COLORS.WHITE
    },
    loginGGFont: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        color: COLORS.OUTER_SPACE
    },
    loginGoogleContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    styleGGlogo: {
        marginRight: scale(8)
    },
    LoginBtnGG: {
        backgroundColor: COLORS.TRANSPARENT,
        borderWidth: 1,
        borderColor: COLORS.OUTER_SPACE
    },
    CreatBtn: {
        alignSelf: 'center',
        marginTop: scale(80)
    },
    CreatBtnFont: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        color: COLORS.OUTER_SPACE,
        fontSize: fontScale(16)
    }
})

export default styles
