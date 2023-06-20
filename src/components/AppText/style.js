import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors';
import { scale } from 'react-native-utils-scale';

const styles = StyleSheet.create({
    TextInputDefault: {
        width: '100%',
        height: scale(52),
        borderWidth: 2,
        borderColor: COLORS.PHILIPPINE_SLIVER,
        borderRadius: 8,
        paddingHorizontal: scale(10),
    }
})

export default styles;