import React from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen/HomeScreen';
import styles from '../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PrimaryColor } from '../../Commons/ConstantsColor';
interface Props {
    product: Product;
}
const CardProduct = ({ product }: Props) => {
    return (
        <View style={styles.contentCard}>
            <Image
                source={{
                    uri: ''
                }}
                style={styles.imageCard} />
            <View>
                <Text style={styles.titleCard}>{product.name}</Text>
                <Text style={styles.subTitleCard}>Precio: ${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.IconCard}>
            <Icon name='add-shopping-cart' size={22} color={PrimaryColor}/>
            </View>
        </View>
    )
}

export default CardProduct
