import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Input, Label, Pressable } from '../../atons';

interface Props {
  onChange: (name: string, value: string) => void;
  item: {
    nome: string;
    email: string;
    telefone: string;
    senha: string;
  };
  onPostUsuario: () => void;
  label: string;
}

export default ({ label, onChange, item, onPostUsuario }: Props) => {
  const [senhas, setSenhas] = useState({
    senha: '',
    configrmar: '',
  });
  return (
    <View style={styles.container}>
      <Label
        style={styles.label}
        label={
          label === 'cadastrar' ? 'Cadastro de Usuário' : 'Edição de usuário'
        }
      />
      <Input
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => onChange('email', text)}
        value={item.email}
      />
      <Input
        value={item.nome}
        placeholder="Nome"
        style={styles.input}
        // keyboardType="numeric"
        onChangeText={(text) => onChange('nome', text)}
      />
      <Input
        value={item.telefone}
        placeholder="Telefone"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => onChange('telefone', text)}
      />

      <Input
        placeholder="Senha"
        style={styles.input}
        value={senhas.senha}
        secureTextEntry={true}
        onChangeText={(text) => {
          onChange('senha', text);
          setSenhas((prevent) => {
            return {
              ...prevent,
              senha: text,
            };
          });
        }}
      />

      <Input
        value={senhas.configrmar}
        placeholder="Confirmar senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => {
          setSenhas((prevent) => {
            return {
              ...prevent,
              configrmar: text,
            };
          });
        }}
      />
      <Pressable
        style={[styles.button, styles.buttonCadastrar]}
        onPress={() => {
          if (senhas.configrmar !== senhas.senha) {
            Alert.alert('Erro!', 'As senhas devem ser iguais!');
            return;
          }
          setSenhas({
            configrmar: '',
            senha: '',
          });
          //   console.log(senhas);
          //   onChange('senha', senhas.senha);
          onPostUsuario();
        }}
      >
        <Label
          style={styles.textStyle}
          label={label === 'cadastrar' ? 'Cadastrar' : 'Editar'}
        />
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
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
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
