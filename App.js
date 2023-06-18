import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainRoutes from './src/routes/MainRoutes'
import { StatusBar } from 'react-native'
import { COLORS } from './src/constants/colors'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={COLORS.TRANSPARENT} />
      <MainRoutes />
    </View>
  )
}

export default App

