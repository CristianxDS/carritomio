import React, { useState } from 'react'
import { Alert, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import TitleComponent from '../Components/TitleComponent'
import { PrimaryColor } from '../Commons/ConstantsColor'
import BodyComponent from '../Components/BodyComponent'
import styles from '../Theme/appTheme'
import InputComponent from '../Components/InputComponent'
import ButoonComponent from '../Components/ButoonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../StackNavegator/StackNavegator';


//interface - props
interface Props {
    users: User[];  //arreglo con la lista de usuarios
}

//inteface para el objeto

interface FormLogin {
    email: string,
    password: string,
}

const LoginScreen = ({users}:Props) => {
       //hook useNavigation: permitir navegar de una pantalla a otra
    const navigation = useNavigation();
    // arreglo de usuarios :permitir el inicio de sesion
   
 
    const [formlogin, setForling] = useState<FormLogin>({
        email: '',
        password: ''
    })
    //hook

    const handleSetValues = (name: string, value: string) => {
        //Cambiar el estado de formlogin
        //... opereador de propagacion :spread:sacar una propiedad de los objetos
        setForling({ ...formlogin, [name]: value });
    }
    //funcionCambiar que permita iniciar sesion 
    const handleSingIn = () => {
        if (!formlogin.email || !formlogin.password) {
            Alert.alert("ERROR",
                "POR FAVOR, COMPLETAR TODOS LOS CAMPOS"
            );
            return;
        }
        // si uso un usuario registrado navego al HomeScreen
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));


        //validar si la contraseña y correo existe
        if (!verifyUser()) { //valor nulo 
            Alert.alert(
                "Error",
                " ¡ Contrasena y/o Correo Incorrecta ! "
            );
            return;


        }

        console.log(formlogin)
    }

   //FUNCION verificar si existe el correo y constraseña
   const verifyUser = () => {
    const existUser = users.filter(user => user.email === formlogin.email &&
        user.password === formlogin.password
    )[0]
    return existUser;
}

    //hook usaStete permitir que la constraseña que sea vsiblw

    const [hiddenPassword, sethiddelPassword] = useState<boolean>(true);

    return (
        <View>
            {/*Status color cambia el color de la barra de arriba*/}
            <StatusBar backgroundColor={PrimaryColor} />
            <TitleComponent title='Iniciar Sesion' />
            <BodyComponent>
                <View>
                    <Text style={styles.titlebody}>
                        BIENVENIIDO DE NUEVO
                    </Text>
                    <Text style={styles.descripcionbody}>
                        Realiza tus compras de manera rapida y segura
                    </Text>
                </View>
                <View style={styles.ContentInput}>
                    <InputComponent placeholder='Correo' 
                    handleSetValues={handleSetValues} 
                    name='email' />
                    <InputComponent placeholder='Contraseña'
                        actionIcon={() => sethiddelPassword(!hiddenPassword)}
                        ispassword={hiddenPassword}
                        handleSetValues={handleSetValues}
                        name='password'
                        hasIcon={true}
                        
                    />
                </View>
                <View style={styles.BotonEnviar}>
                    <ButoonComponent Accionboton={handleSingIn} textButon='Iniciar'
                    />
                </View>
                <TouchableOpacity
                onPress={() => navigation.dispatch(CommonActions.navigate({name:"Register"}))}
                >
                    <Text style={styles.textRedirection}>No tienes cuenta? REGISTRATE AHORA</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}

export default LoginScreen
