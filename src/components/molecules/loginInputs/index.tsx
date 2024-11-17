import React from 'react';
import { Input } from '../../atons';
import { StyleSheet } from 'react-native';

interface Props {
  handleInput: (name: string, value: string) => void;
}

export default ({ handleInput }: Props) => {
  return (
    <>
      <Input
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => handleInput('email', text)}
      />
      <Input
        placeholder="Senha"
        style={styles.input}
        onChangeText={(text) => handleInput('senha', text)}
        secureTextEntry
      />
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginBottom: 10,
  },
});
