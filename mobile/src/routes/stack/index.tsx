import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../views/login';
import Register from '../../views/register';

import DrawerNavigator from '../drawer';
import AuthPage from '../../views/authPage';
import { Context } from '../../context/authContext';
import Cadastrar from '../../views/estoque/cadastrar';
import NovaEntrada from '../../views/estoque/novaEntrada';
import NovaSaida from '../../views/estoque/novaSaida';
export default () => {
  const { state } = useContext(Context);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.token ? (
          <>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen
              name="CadastrarEstoque"
              component={Cadastrar}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="NovaSaida"
              component={NovaSaida}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="NovaEntrada"
              component={NovaEntrada}
              options={{ headerShown: true, title: '' }}
            />
          </>
        ) : (
          <>
            {!state.logged ? (
              <Stack.Screen name="AuthPage" component={AuthPage} />
            ) : null}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
