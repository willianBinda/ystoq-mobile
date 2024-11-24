import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Label } from '../../atons';
import { NovoEstoqueButton, NovoEstoqueInput } from '../../molecules';

interface Props {
  onChange: (name: string, value: string | number) => void;
  onPostEstoque: () => void;
}

export default ({ onChange, onPostEstoque }: Props) => {
  return (
    <View style={styles.container}>
      <Label style={styles.label} label="Cadastro de Estoque" />
      <NovoEstoqueInput onChange={onChange} />
      <NovoEstoqueButton onPostEstoque={onPostEstoque} />
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
});
