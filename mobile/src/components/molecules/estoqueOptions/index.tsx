import React, { useContext } from 'react';
import { Label, Pressable } from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminStackList } from '../../../types';
import { Context } from '../../../context/authContext';

export default () => {
  const { state } = useContext(Context);
  const navigation = useNavigation<NavigationProp<AdminStackList>>();

  return (
    <>
      <View>
        <Label label="Estoques" style={styles.label} />
      </View>

      {state.adminFlag ? (
        <Pressable
          style={[styles.opt, styles.green]}
          onPress={() => navigation.navigate('CadastrarEstoque')}
        >
          <Label label="+ Cadastrar estoque" />
        </Pressable>
      ) : null}

      <Pressable
        style={[styles.opt, styles.red]}
        onPress={() => navigation.navigate('NovaSaida')}
      >
        <Label label="+ Nova saída" />
      </Pressable>

      <Pressable
        style={[styles.opt, styles.green]}
        onPress={() => navigation.navigate('NovaEntrada')}
      >
        <Label label="+ Nova entrada" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  opt: {
    padding: 10,
    marginBottom: 5,
    width: '100%',
    borderRadius: 10,
  },
  red: {
    backgroundColor: '#CD0000',
  },
  green: {
    backgroundColor: '#71C72A',
  },
});
