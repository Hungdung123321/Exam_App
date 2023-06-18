import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';
import { scale } from 'react-native-utils-scale';

const styles = StyleSheet.create({
    TextInputDefault: {
        width: '90%',
        borderWidth: 2,
        borderColor: COLORS.BLUE_DARK,
        borderRadius: 8,
        paddingHorizontal: scale(10),
    }
})

export default styles;