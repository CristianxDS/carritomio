import React from 'react'
import { Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Car } from '../HomeScreen/HomeScreen';
import styles from '../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PrimaryColor } from '../../Commons/ConstantsColor';
import { FlatList } from 'react-native-gesture-handler';

//Interface Props
interface Props {
  isVisible: boolean;
  setShowModal: () => void;
  car: Car[];
  clearCart: () => void; 
}
const ModalCard = ({ isVisible, setShowModal, car,clearCart}: Props) => {

  const { width } = useWindowDimensions();
  //función para calcular el total a pagar
  const totalPay = (): number => {
    //acumulador
    let total: number = 0;
    car.forEach(product => {
      total += product.price * product.totalQuantity
    });
    return total;
  }
  //función enviar la compra
  const handleSendInfo = () => {
    //Cerrar el modal
    setShowModal();
    clearCart();
  }
  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.contentPrincipal}>
        <View style={{
          ...styles.contentModal,
          width: width * 0.80
        }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>Mis Productos</Text>
            <View style={styles.IconCard}>
              <Icon
                name='cancel'
                size={27}
                color={PrimaryColor}
                onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.headerTable}>
            <Text style={styles.textHeaderInf}>Producto</Text>
            <View style={styles.headerTableInf}>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Prec.</Text>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Cant.</Text>
              <Text style={{
                ...styles.textHeaderInf,
                marginHorizontal: 10
              }}>Total</Text>
            </View>
          </View>
          <FlatList
            data={car}
            renderItem={({ item }) =>
              <View style={styles.headerTable}>
                <Text>{item.name}</Text>
                <View style={styles.headerTableInf}>
                  <Text style={{ marginHorizontal: 10 }}>
                    {item.price.toFixed(2)}
                  </Text>
                  <Text style={{ paddingHorizontal: 27 }}>
                    {item.totalQuantity}
                  </Text>
                  <Text style={{ marginHorizontal: 10 }}>
                    {(item.price * item.totalQuantity).toFixed(2)}
                  </Text>
                </View>
              </View>
            }
            keyExtractor={item => item.id.toString()} />
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textTotalPay}>
              Total pagar: ${totalPay().toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleSendInfo}
            style={styles.buttonAddCard}>
            <Text style={styles.textButtonAddCard}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
} 

export default ModalCard
