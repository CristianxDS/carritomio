import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import { PrimaryColor } from '../Commons/ConstantsColor';
import RegisterScreen from '../Screens/RegisterScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { useState } from 'react';
//interface - arreglo lista usuarios - objetos
export interface User {
    id: number,
    email: string,
    password: string,
}
const Stack = createStackNavigator();

const StackNavegator = () => {
    //arreglo de usuarios: permitir inicio de sesión
    const users: User[] = [
        { id: 1, email: 'Cris@gmail.com', password: '12345' },
        { id: 2, email: 'Cristi@gmail.com', password: '1234567' }
    ];
    //hook useState: manipular el arreglo con la lista de usuarios
    const [listUsers, setListUsers] = useState(users);
    //función para agregar nuevos usuarios al arreglo
    const handleAddUser = (user: User) => {
        //operador propagación ... : crear una copia del arreglo
        setListUsers([...listUsers, user]);
    }
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: PrimaryColor
                }
            }}
        >
            <Stack.Screen
                options={{ headerShown: false, }} name="LoginS"
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen
                options={{ headerShown: false, }}
                name="RegisterS"
                children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={HomeScreen} />
        </Stack.Navigator>
    );
}
export default StackNavegator
