import { View, ScrollView } from 'react-native'
import React from 'react'
import { APP_VIEW_TYPE } from '../../constants/common'

const AppView = ({ type = APP_VIEW_TYPE.VIEW, children, style }) => {
    switch (type) {
        case APP_VIEW_TYPE.VIEW:
            return <View style={style}>{children}</View>
        case APP_VIEW_TYPE.SCROLL_VIEW:
            return <ScrollView style={style}>{children}</ScrollView>
    }
}

export default AppView
