// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPage from '../../views/drawer';
import Dashboard from '../../views/dashboard';
import Estoque from '../../views/estoque';

export default () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#e4e4e7' },
        // headerStyle: { backgroundColor: '#071528' },
      }}
      drawerContent={DrawerPage}
    >
      <Drawer.Screen
        name="Estoque"
        component={Estoque}
        options={{ title: '' }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: '' }}
      />
    </Drawer.Navigator>
  );
};
