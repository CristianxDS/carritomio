import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import styles from '../Theme/appTheme'
//para el paso de propiedades se usa una interfae
interface Props{
    title:string,

}
const TitleComponent = ({title}:Props) => {
    const{height}=useWindowDimensions();
  return (
    <Text style={{...styles.globaltitle,
        height:height*0.10
    }}>{title}</Text>
  )
}

export default TitleComponent
