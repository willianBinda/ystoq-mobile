import React from 'react';
import { Input } from '../../atons';
import { StyleSheet } from 'react-native';

interface Props {
  onChange: (name: string, value: string | number) => void;
}

export default ({ onChange }: Props) => {
  return (
    <>
      <Input
        placeholder="Descrição"
        style={styles.input}
        onChangeText={(text) => onChange('descricao', text)}
      />
      <Input
        placeholder="Quantidade máxima (unidade)"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => onChange('quantidade', parseInt(text, 10))}
      />
      <Input
        placeholder="Endereco"
        style={styles.input}
        onChangeText={(text) => onChange('endereco', text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
});
