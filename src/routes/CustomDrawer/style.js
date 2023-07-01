import { StyleSheet } from 'react-native'
import { scale } from 'react-native-utils-scale'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: scale(56)
    },
    container__boxImg: {
        alignSelf: 'center'
    }
})

export default styles