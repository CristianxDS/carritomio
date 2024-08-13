import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import styles from '../Theme/appTheme'

const BodyComponent = (props: any) => {
    //hook useWindowDimension: Tamallo de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.ContentBody,
            height: height * 0.90
        }}>
            {props.children}
        </View>
    )
}

export default BodyComponent
