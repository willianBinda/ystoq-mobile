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
import Movimentacao from '../../views/estoque/movimentacao';
import Editar from '../../views/estoque/editar';
import EditarMovimentacao from '../../views/estoque/movimentacao/editar';
import ProdutosEstoque from '../../views/estoque/produtosEstoque';
import EditarUsuario from '../../views/usuarios/editarUsuario';
import NovoUsuario from '../../views/usuarios/novoUsuario';
import NovoProduto from '../../views/produtos/novoProduto';
import EditarProduto from '../../views/produtos/editarProduto';
import NovoCat from '../../views/categoriaProdutos/novoCat';
import EditarCat from '../../views/categoriaProdutos/editarCat';

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
            <Stack.Screen
              name="MovimentacaoEstoque"
              component={Movimentacao}
              options={{ headerShown: true, title: '' }}
            />

            <Stack.Screen
              name="EditarEstoque"
              component={Editar}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="ProdutosEstoque"
              component={ProdutosEstoque}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="EditarMovimentacao"
              component={EditarMovimentacao}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="EditarUsuario"
              component={EditarUsuario}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="NovoUsuario"
              component={NovoUsuario}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="NovoProduto"
              component={NovoProduto}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="EditarProduto"
              component={EditarProduto}
              options={{ headerShown: true, title: '' }}
            />

            <Stack.Screen
              name="NovoCat"
              component={NovoCat}
              options={{ headerShown: true, title: '' }}
            />
            <Stack.Screen
              name="EditarCat"
              component={EditarCat}
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
