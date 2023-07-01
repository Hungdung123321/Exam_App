import { StyleSheet } from 'react-native'
import { APP_FONTS } from '../assets/fonts';
import { fontScale } from 'react-native-utils-scale';

const styles = StyleSheet.create({
    LabelStyle: {
        fontFamily: APP_FONTS.BOLD,
        fontSize: fontScale(18)
    }
})

export default styles;