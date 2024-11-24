import React, { useContext } from 'react';
import {
  DashboardIcon,
  EstoqueIcon,
  Label,
  Pressable,
  SignOutIcon,
} from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminDrawerList } from '../../../types';
import { Context } from '../../../context/authContext';
import { destroyStoreData } from '../../../actions';

export default () => {
  const { setSignOut } = useContext(Context);
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
