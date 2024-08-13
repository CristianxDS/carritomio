import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import BodyComponent from '../Components/BodyComponent';
import styles from '../Theme/appTheme'
import InputComponent from '../Components/InputComponent'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButoonComponent from '../Components/ButoonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../StackNavegator/StackNavegator';

//interface - props
interface Props {
  users: User[];  //arreglo con la lista de usuarios
  handleAddUser: (user: User) => void; //función para añadir nuevos elementos al arreglo
}

//interface formulario-registros
interface FormRgister {
  email: string,
  password: string,
}

const RegisterScreen = ({users,handleAddUser}:Props) => {
  const navigation = useNavigation();
  const handleSetValues = (name: string, value: string) => {
    //Cambiar el estado de formlogin
    //... opereador de propagacion :spread:sacar una propiedad de los objetos
  }
  //hook usaStete permitir que la constraseña que sea vsiblw
  const [hiddenPassword, sethiddelPassword] = useState<boolean>(true);

  //manipular el stado del color
  const [formRegister, setFormRegister] = useState<FormRgister>({
    email: '',
    password: '',
  })

  //funcion que actualice el estado del formulario
  const hanldleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value })
  }

  //funcion que permita registrar usuario 
  const handleSingUp = () => {
//Validar que los campos se encuentren llenos
if (!formRegister.email || !formRegister.password) {
  //Mensaje de aviso
  Alert.alert(
    "Error",
    "Por favor, completar todos los campos!"
  );
  return;
  }

      //Validar que no se registre un usuario ya existente
  if (verifyUser() != null) {
    Alert.alert(
      "Error",
      "El correo ya se encuentra registrado!"
    );
    return;
  }

   //Generar la información del nuevo usuario
    //Obtener en un arreglo los ids de los usuarios registrados
    const getIdUsers = users.map(user => user.id);  //[1,2]
    //Generando el id del nuevo usuario
    const getNewId = Math.max(...getIdUsers) + 1;
    //Crear el nuevo usuario - nuevo objeto de tipo User
    const newUser: User = {
      id: getNewId,
      email: formRegister.email,
      password: formRegister.password
    }
    //Guardar el nuevo usuario en el arreglo
    handleAddUser(newUser);
    Alert.alert(
      "Felicitaciones",
      "Registro exitoso!"
    );
    navigation.goBack();
    //console.log(formRegister);
  }


    //función para verificar que el usuario está en la lista de usuarios - arreglo
    const verifyUser = (): User => {
      const existUser = users.filter(user => user.email === formRegister.email)[0];
      return existUser; //User | null
    }

  return (
    <View>
      <StatusBar backgroundColor='PrimaryColor' />
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
          />
        </View>
        <View style={styles.BotonEnviar}>
          <ButoonComponent Accionboton={handleSingUp} textButon='Iniciar' />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>No tienes cuenta? REGISTRATE AHORA</Text>
        </TouchableOpacity>

      </BodyComponent>
    </View>


  )
}



export default RegisterScreen
