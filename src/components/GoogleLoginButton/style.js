import { StyleSheet } from 'react-native';
import { APP_FONTS } from '../../../android/app/build/intermediates/assets/debug/custom';
import { scale } from 'react-native-utils-scale';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
    google_font: {
        fontFamily: APP_FONTS.SEMI_BOLD,
        fontWeight: '600',
        fontSize: scale(16),
        color: COLORS.OUTER_SPACE
    },
    google_button_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default styles;