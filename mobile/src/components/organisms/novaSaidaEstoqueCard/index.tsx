import React from 'react';
import { Label, Pressable } from '../../atons';
import { StyleSheet, View } from 'react-native';
import { NovaSaidaInput } from '../../molecules';

export default ({
  onChange,
  onPostEstoqueSaida,
  estoqueList,
  saidaEstoque,
  produtoList,
}: {
  onChange: (name: string, value: string | number) => void;
  onPostEstoqueSaida: () => void;
  estoqueList: any;
  saidaEstoque: any;
  produtoList: any;
}) => {
  return (
    <View style={styles.container}>
      <Label style={styles.label} label="Cadastro de Movimentação (Saída)" />
      <NovaSaidaInput
        onChange={onChange}
        estoqueList={estoqueList}
        saidaEstoque={saidaEstoque}
        produtoList={produtoList}
      />
      <Pressable
        style={[styles.button, styles.buttonCadastrar]}
        onPress={() => {
          onPostEstoqueSaida();
        }}
      >
        <Label style={styles.textStyle} label="Cadastrar" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
    color: '#4F7598',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCadastrar: {
    backgroundColor: '#5583AC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
