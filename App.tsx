import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeScreenNavigationContainer } from 'react-native-screens';
import StackNavegator from './src/StackNavegator/StackNavegator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavegator/>
    </NavigationContainer>
  )
}

export default App
