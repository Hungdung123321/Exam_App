import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import { scale } from 'react-native-utils-scale'

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
    TextInputAccount: {
        alignSelf: 'center',
        marginBottom: scale(20)
    },
    LoginBtn: {
        width: '90%',
        backgroundColor: COLORS.BLUE,
        borderRadius: 8,
        paddingVertical: scale(16),
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: scale(40)
    }
})

export default styles
