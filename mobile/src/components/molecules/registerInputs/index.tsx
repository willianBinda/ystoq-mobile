import React from 'react';
import { Input, InputMask } from '../../atons';
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
        placeholder="Nome"
        style={styles.input}
        onChangeText={(text) => handleInput('nome', text)}
      />
      <Input
        placeholder="Nome da Empresa"
        style={styles.input}
        onChangeText={(text) => handleInput('nome_empresa', text)}
      />
      <InputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        placeholder="Telefone"
        onChangeText={(text) => handleInput('telefone', text)}
        style={styles.input}
      />
      <InputMask
        type={'cnpj'}
        style={styles.input}
        placeholder="CNPJ"
        onChangeText={(text) => handleInput('cnpj', text)}
      />
      <Input
        placeholder="Senha"
        style={styles.input}
        onChangeText={(text) => handleInput('senha', text)}
        secureTextEntry
      />
      <Input
        placeholder="Confirmar Senha"
        style={styles.input}
        onChangeText={(text) => handleInput('confirmar_senha', text)}
        secureTextEntry
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
