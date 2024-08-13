import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../Theme/appTheme'

interface Props {
  textButon: String
  Accionboton: () => void;
}
const ButoonComponent = ({ textButon, Accionboton }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={Accionboton}>
        <Text style={styles.TextBoton}>
          {textButon}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButoonComponent
