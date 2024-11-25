import React, { useContext } from 'react';
import {
  DashboardIcon,
  EstoqueIcon,
  Label,
  Pressable,
  SignOutIcon,
  UsersIcon,
  ProdutoIcon,
  ListDrawerIcon,
} from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminDrawerList } from '../../../types';
import { Context } from '../../../context/authContext';
import { destroyStoreData } from '../../../actions';

export default () => {
  const { setSignOut, state } = useContext(Context);
  const navigation = useNavigation<NavigationProp<AdminDrawerList>>();
  return (
    <>
      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <View style={styles.component}>
          <DashboardIcon />
        </View>
        <View style={styles.component}>
          <Label label="Dashboard" style={styles.label} />
        </View>
      </Pressable>

      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('Estoque')}
      >
        <View style={styles.component}>
          <EstoqueIcon />
        </View>
        <View style={styles.component}>
          <Label label="Estoques" style={styles.label} />
        </View>
      </Pressable>
      {state.adminFlag ? (
        <Pressable
          style={styles.row}
          onPress={() => navigation.navigate('Usuarios')}
        >
          <View style={styles.component}>
            <UsersIcon />
          </View>
          <View style={styles.component}>
            <Label label="Usuários" style={styles.label} />
          </View>
        </Pressable>
      ) : null}

      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('Produtos')}
      >
        <View style={styles.component}>
          <ProdutoIcon />
        </View>
        <View style={styles.component}>
          <Label label="Produtos" style={styles.label} />
        </View>
      </Pressable>

      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('CategoriasProduto')}
      >
        <View style={styles.component}>
          <ListDrawerIcon />
        </View>
        <View style={styles.component}>
          <Label label="Categoria de produtos" style={styles.label} />
        </View>
      </Pressable>

      <Pressable
        style={styles.row}
        onPress={() => {
          // navigation.navigate('')
          destroyStoreData();
          setSignOut();
        }}
      >
        <View style={styles.component}>
          <SignOutIcon />
        </View>
        <View style={styles.component}>
          <Label label="Sair" style={styles.label} />
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  component: {
    marginRight: 10,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  label: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
