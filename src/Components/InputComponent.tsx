import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { InputColor, PrimaryColor } from '../Commons/ConstantsColor'
import styles from '../Theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  placeholder: string,
  handleSetValues: (name: string, value: string) => void;
  name: string,
  hasIcon?: boolean;
  ispassword?: boolean; //props opcional 
  actionIcon?: () => void, //prop funcional
}


const InputComponent = ({ placeholder, handleSetValues, name, ispassword = false, actionIcon,hasIcon=false }: Props) => {
  return (
    <View>
      {
  (hasIcon)?<Icon
  name='visibility'
 size={25}
 onPress={actionIcon}
 color={PrimaryColor}
 style={styles.IconPassword}
  /> :null
      }


      <TextInput
        placeholder={placeholder}
        keyboardType='default'
        secureTextEntry={ispassword}
        style={styles.inputText}
        onChangeText={(value) => handleSetValues(name, value)}

      />
    </View>
  )
}

export default InputComponent
