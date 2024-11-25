import React from 'react';
import { Label, Pressable } from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AdminStackList } from '../../../types';

export default () => {
  const navigation = useNavigation<NavigationProp<AdminStackList>>();

  return (
    <>
      <View style={styles.title}>
        <Label label="Movimentações" style={styles.label} />
      </View>
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
  title: {},
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // borderWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#CD0000',
  },
  buttonCadastrar: {
    backgroundColor: '#5583AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  footer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  select: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
