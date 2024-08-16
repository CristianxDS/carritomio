import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PrimaryColor, SecundaryColor } from '../../Commons/ConstantsColor';
import TitleComponent from '../../Components/TitleComponent';
import BodyComponent from '../../Components/BodyComponent';
import CardProduct from '../Components/CardProduct';
import styles from '../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalCard from '../Components/ModalCard';

// Interface
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

const HomeScreen = () => {
    // Arreglo con la lista de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 1.60, stock: 20, pathImage: '' },
        { id: 2, name: 'Funda de azúcar', price: 1.80, stock: 15, pathImage: '' },
        { id: 3, name: 'Funda de sal', price: 0.90, stock: 25, pathImage: '' },
        { id: 4, name: 'Funda de frijoles', price: 2.30, stock: 10, pathImage: '' },
        { id: 5, name: 'Funda de harina', price: 1.50, stock: 18, pathImage: '' },
        { id: 6, name: 'Funda de café', price: 3.40, stock: 12, pathImage: '' },
        { id: 7, name: 'Funda de avena', price: 2.00, stock: 22, pathImage: '' },
        { id: 8, name: 'Funda de maíz', price: 1.70, stock: 20, pathImage: '' },
    ];

    // Hook useState: manipular el arreglo de productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    // Hook useState: manipular el arreglo del carrito de compras
    const [car, setCar] = useState<Car[]>([]);

    // Hook useState: manipular la visibilidad del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    // Función para actualizar la información del arreglo producto
    const changeStockProduct = (idProduct: number, quantity: number) => {
        // Nuevo arreglo con el stock actualizado
        const updateStock = productsState.map(product =>
            product.id === idProduct
                ? { ...product, stock: product.stock - quantity }
                : product
        );
        // Actualizar productsState
        setProductsState(updateStock);

        // Llamar función agregar carrito
        addProduct(idProduct, quantity);
    };

    // Función agregar los productos al carrito
    const addProduct = (idProduct: number, quantity: number) => {
        const product = productsState.find(product => product.id === idProduct);

        // Controlar si el producto no ha sido encontrado
        if (!product) {
            return;
        }

        // Revisar si el producto ya está en el carrito
        const existingProductIndex = car.findIndex(item => item.id === idProduct);
        if (existingProductIndex > -1) {
            // Si ya existe, actualizar la cantidad
            const updatedCar = [...car];
            updatedCar[existingProductIndex] = {
                ...updatedCar[existingProductIndex],
                totalQuantity: updatedCar[existingProductIndex].totalQuantity + quantity
            };
            setCar(updatedCar);
        } else {
            // Si no existe, agregar nuevo producto
            const newProductCar: Car = {
                id: product.id,
                name: product.name,
                price: product.price,
                totalQuantity: quantity
            };
            setCar([...car, newProductCar]);
        }
        
    
    };
     // Función para vaciar el carrito
     const clearCart = () => {
        setCar([]);
    };

    return (
        <View>
            <StatusBar backgroundColor={PrimaryColor} />
            <View style={styles.contentHeaderHome}>
                <TitleComponent title='Productos' />
                {car.length > 0 && ( // Condicional para mostrar el ícono solo si hay productos en el carrito
                    <View style={{
                        ...styles.IconCard,
                        paddingHorizontal: 33
                    }}>
                        <Text style={styles.textIconCar}>{car.length}</Text>
                        <Icon
                            name='shopping-cart'
                            size={33}
                            color={SecundaryColor}
                            onPress={() => setShowModal(!showModal)}
                        />
                    </View>
                )}
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
            <ModalCard
           clearCart={clearCart} // Pasar la función clearCart al modal
                isVisible={showModal}
                car={car}
                setShowModal={() => setShowModal(!showModal)}
            />
        </View>
    );
};

export default HomeScreen;

