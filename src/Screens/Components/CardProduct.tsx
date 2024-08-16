import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Product } from '../HomeScreen/HomeScreen';
import styles from '../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PrimaryColor } from '../../Commons/ConstantsColor';
import ModalProduct from './ModalProduct';
interface Props {
    product: Product;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}
const CardProduct = ({ product, changeStockProduct }: Props) => {
    
    //hook useState: manipular el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={styles.contentCard}>
            <Image
                source={{
                    uri: product.pathImage
                }}
                style={styles.imageCard} />
            <View>
                <Text style={styles.titleCard}>{product.name}</Text>
                <Text style={styles.subTitleCard}>Precio: ${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.IconCard}>
                <Icon name='add-shopping-cart'
                    size={22} color={PrimaryColor}
                    onPress={() => setShowModal(!showModal)} />
            </View>
 <ModalProduct
                isVisible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                product={product}
                changeStockProduct={changeStockProduct} />
        </View>
    )
}

export default CardProduct
